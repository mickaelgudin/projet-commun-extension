import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage} from '../utils';
import StylusLanguage from '../languages/stylusLanguage'


export default class StylusDiagnosticHandler {
	launchDiagnosticStylus(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number,
		diagnostics: Diagnostic[] ) {
		const allowedStylusVariables: string[] = StylusLanguage.getStylusVariables();

		let pattern = RegExp(StylusLanguage.getRegStylusVariables(), 'gi');
		let m = null;

		//diagnostic script ts vue
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			let currentLanguage: string = getLanguage(textDocument, text, m);
	
			
			if(currentLanguage === 'stylus') {
				this.doDiagnostic(textDocument, allowedStylusVariables, m, diagnostics);
			}
		}


	}

	doDiagnostic(textDocument: TextDocument, alloweComponents: string[], m: RegExpExecArray, diagnostics: Diagnostic[]) {
		//should be lowercase
		if( !alloweComponents.includes(m[0]) && alloweComponents.includes(m[0].toLowerCase()) ) {
			diagnostics.push(
				createDiagnostic(DiagnosticSeverity.Information, textDocument, m, `${m[0]} should be lowercase.`)
			);
		}

		//components starting with the match exist but component is not written properly
		else if(!alloweComponents.includes(m[0].toLowerCase() ) ) {
			let componentsStartingWith = this.getComponentStartingWithMatch(m[0], alloweComponents);

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

	getComponentStartingWithMatch(match: string, components: string[]): string[] {
		return components.filter((comp) => { 
			return comp.startsWith(match.toLowerCase());
		});
	}
}