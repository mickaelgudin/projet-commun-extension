import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic} from '../utils';


//typescript shouldn't contain pug elements (only import are allowed so we focus only on lowercase scenario)
export function diagnosticPresencePugElement(allowedPugComponents: string[], 
													diagnostics: Diagnostic[],
													textDocument: TextDocument,
													m: RegExpExecArray
													) {
	if(allowedPugComponents.includes(m[0]) ) {
		diagnostics.push(
			createDiagnostic(
				DiagnosticSeverity.Warning, 
				textDocument, 
				m, 
				'Don\'t use pug elements outside the template your are currently in typescript script '
			)
		);
	}
}

export function diagnosticVuePropertyDecotor(allowedVuePropertyDecoratorsLowerCase: string[], 
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
				{
					severity: DiagnosticSeverity.Warning,
					range: {
						start: textDocument.positionAt(m.index),
						end: textDocument.positionAt(m.index + m[0].length)
					},
					message: 'Vue property decorator should be one of the follwing : '+decoratorsStartingWith.join(', '),
					source: 'ex'
				}
			);
		}
	} else if( !allowedVuePropertyDecorators.includes(m[0]) 
				&& allowedVuePropertyDecoratorsLowerCase.includes(m[0].toLowerCase()) ){

		diagnostics.push(
			{
				severity: DiagnosticSeverity.Warning,
				range: {
					start: textDocument.positionAt(m.index),
					end: textDocument.positionAt(m.index + m[0].length)
				},
				message: 'Vue property decorator should be respect case(refers to the documentation)',
				source: 'ex'
			}
		);
	}
}