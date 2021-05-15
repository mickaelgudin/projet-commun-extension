/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	InsertTextFormat
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';


// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const reg = getPugReg();
	const pattern = RegExp(reg, 'g');
	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];
	const allowedComponents: string[] = getPugElements();

	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		const isNotInPug = text.substring(m.index + m[0].length).search('<template lang="pug">') == -1 && 
						text.substring(m.index + m[0].length).search('</template>') == -1;

		if(m[0].length <= 1 || isNotInPug) continue; //excluding if not in pug template

		//should be lowercase
		if( !allowedComponents.includes(m[0]) && allowedComponents.includes(m[0].toLowerCase()) ) {
			diagnostics.push({
				severity: DiagnosticSeverity.Information,
				range: {
					start: textDocument.positionAt(m.index),
					end: textDocument.positionAt(m.index + m[0].length)
				},
				message: `${m[0]} should be lowercase.`,
				source: 'ex'
			});
			problems++;
		}

		//components starting with the match exist but component is not written properly
    	else if(!allowedComponents.includes(m[0].toLowerCase() ) ) {
			let componentsStartWith = allowedComponents.filter((comp) => { 
				if(m != null) {
					return comp.startsWith(m[0].toLowerCase());
				}

				return false;
			});

			if(componentsStartWith.length > 0) {
				const diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Warning,
					range: {
						start: textDocument.positionAt(m.index),
						end: textDocument.positionAt(m.index + m[0].length)
					},
					message: `${m[0]} should be one of the following : ${componentsStartWith.join(', ')}`,
					source: 'ex'
				};
				diagnostics.push(diagnostic);
				problems++;
			}
		}
		
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			},
			{
				label: "func",
				kind: CompletionItemKind.Snippet,
				insertText: [
				  "function ${1:Name}(${2}) ${3:abort}",
				  "\t${0}",
				  "endfunction",
				].join("\n"),
				insertTextFormat: InsertTextFormat.Snippet,
			  },
		];
	}
);

function getPugReg(): string {
	let pugArray = getPugElements(); 
	let reg:string = '';

	//getting component regex insentive to case and containing at least 2 first letters
	pugArray.forEach(function(e) {
		const charsOfComponent =  Array.from(e);
		reg+= '(';

		let count = 0;
		let limit = (e.startsWith('q-')) ? 4 : 2;
		charsOfComponent.forEach(function(c, index){
			
			const optionalChar = (count >= limit) ? '?' : '';
			reg+= '(' + c + '|'+ c.toUpperCase() + ')'+optionalChar;
			count++;
		});

		reg+= ')|';
	});

	reg = reg.slice(0, -1);

	return reg;
}


function getPugElements(): string[] {
	return ["img",
			"a",
			"div",
			"span",
			"q-input",
			"q-infinite-scroll", 
			"q-inner-loading",
			"q-intersection",
			"q-card",
			"q-carousel",
			"q-chat-message",
			"q-chip",
			"q-circular-progress",
			"q-color",
			"q-checkbox",
			"button",
			"q-btn",
			"q-btn-group",
			"q-btn-dropdown",
			"q-btn-toggle",
			"q-badge",
			"q-banner",
			"q-bar",
			"q-breadcrumbs",
			"q-img"
		];
}


// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
