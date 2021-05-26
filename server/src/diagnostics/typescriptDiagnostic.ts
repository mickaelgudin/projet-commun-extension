import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage} from '../utils';
import TypeScriptLanguage from '../languages/typescriptLanguage'


export default class TypeScriptDiagnosticHandler {
	launchDiagnosticTypescript(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number,
		diagnostics: Diagnostic[]
		) {
		const allowedVuePropertyDecorators: string[] = TypeScriptLanguage.getVueDecorators();
		const allowedVuePropertyDecoratorsLowerCase = allowedVuePropertyDecorators.map(el => el.toLowerCase());
	
		let pattern = RegExp(TypeScriptLanguage.getVueDecoratorRegex(), 'gi');
		let m = null;
		//diagnostic script ts vue
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			let currentLanguage: string = getLanguage(textDocument, text, m);
	
			if(currentLanguage === 'vue-typescript') {
				this.diagnosticVuePropertyDecotor(allowedVuePropertyDecoratorsLowerCase, allowedVuePropertyDecorators, diagnostics, textDocument, m);
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
	diagnosticVuePropertyDecotor(allowedVuePropertyDecoratorsLowerCase: string[], 
														allowedVuePropertyDecorators: string[], 
														diagnostics: Diagnostic[],
														textDocument: TextDocument,
														m: RegExpExecArray
														) {
		if(!allowedVuePropertyDecoratorsLowerCase.includes(m[0].toLowerCase() ) ){
			let decoratorsStartingWith = allowedVuePropertyDecorators.filter(e => {
				return m!=null ? e.toLowerCase().startsWith(m[0].toLowerCase() ) : false;
			});

			if(decoratorsStartingWith.length > 0 ) {
				diagnostics.push(
					createDiagnostic(DiagnosticSeverity.Warning, textDocument, m, 
						'Vue property decorator should be one of the follwing : '+decoratorsStartingWith.join(', ')
					)
				);
			}
		} else if( !allowedVuePropertyDecorators.includes(m[0]) 
					&& allowedVuePropertyDecoratorsLowerCase.includes(m[0].toLowerCase()) ){

			diagnostics.push(
				createDiagnostic(DiagnosticSeverity.Warning, textDocument, m, 
					'Vue property decorator should be respect case(refers to the documentation)'
				)
			);
		}
	}
}