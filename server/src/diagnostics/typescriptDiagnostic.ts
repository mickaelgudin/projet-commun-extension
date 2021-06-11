import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {parse, ParseResult} from '../syntaxes/typescriptParser'

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage} from '../utils';
import TypeScriptLanguage from '../languages/typescriptLanguage'


export default class TypeScriptDiagnosticHandler {
	launchDiagnosticTypescript(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number,
		diagnostics: Diagnostic[]
		) {
	
		let pattern = RegExp(TypeScriptLanguage.getVueDecoratorRegex(), 'gi');
		let m = null;
		//diagnostic script ts vue
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			let currentLanguage: string = getLanguage(textDocument, text, m);
	
			if(currentLanguage === 'vue-typescript') {
				this.diagnosticVuePropertyDecotor(diagnostics, textDocument, m);
			}
		}
	}


	//typescript shouldn't contain pug elements (only import are allowed so we focus only on lowercase scenario)
	diagnosticPresencePugElement(allowedPugComponents: string[], 
										diagnostics: Diagnostic[],
										textDocument: TextDocument,
										m: RegExpExecArray
										) {
		if(allowedPugComponents.includes(m[0]) ) {
			diagnostics.push(
					createDiagnostic(DiagnosticSeverity.Warning, textDocument, m, 
					'Don\'t use pug elements outside the template your are currently in typescript script '
					)
			);
		}
	}

	//diagnostic for vue decorator annotations
	diagnosticVuePropertyDecotor(diagnostics: Diagnostic[], textDocument: TextDocument, m: RegExpExecArray) {
		let results:ParseResult = parse(m[0]);

		if(results.errs.length > 0) {
			diagnostics.push(
				createDiagnostic(DiagnosticSeverity.Warning, textDocument, m, 
					'This vue property decorator doesn\'t exist or is mispelled'
				)
			);
		}
	}
}