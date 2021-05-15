import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic} from '../utils';

export default function doPugDiagnostic(textDocument: TextDocument, allowedPugComponents: string[], m: RegExpExecArray, 
										diagnostics: Diagnostic[]) {

	//should be lowercase
	if( !allowedPugComponents.includes(m[0]) && allowedPugComponents.includes(m[0].toLowerCase()) ) {
		diagnostics.push(
			createDiagnostic(DiagnosticSeverity.Information, textDocument, m, `${m[0]} should be lowercase.`)
		);
	}

	//components starting with the match exist but component is not written properly
	else if(!allowedPugComponents.includes(m[0].toLowerCase() ) ) {
		let componentsStartingWith = getComponentStartingWithMatch(m[0], allowedPugComponents);

		if(componentsStartingWith.length > 0) {
			diagnostics.push(
				createDiagnostic(DiagnosticSeverity.Warning, 
								textDocument, m, 
								`${m[0]} should be one of the following : ${componentsStartingWith.join(', ')}`)
			);
		}
	}

	return diagnostics;
}

function getComponentStartingWithMatch(match: string, allowedPugComponents: string[]) {
	return allowedPugComponents.filter((comp) => { 
		return comp.startsWith(match.toLowerCase());
	});
}