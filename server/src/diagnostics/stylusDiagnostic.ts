import {
	Diagnostic
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {getLanguage, createDiagnosticIfHasErrors} from '../utils';
import StylusLanguage from '../languages/stylusLanguage'
import {parse, ParseResult} from '../syntaxes/stylusVariablesParser'

export default class StylusDiagnosticHandler {
	launchDiagnosticStylus(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number,
		diagnostics: Diagnostic[] ) {

		let pattern = RegExp(StylusLanguage.getRegStylusVariables(), 'gi');
		let m = null;

		//diagnostic quasar stylus variables
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			let currentLanguage: string = getLanguage(textDocument, text, m);
	
			if(currentLanguage === 'stylus') {
				let results:ParseResult = parse(m[0]);
				createDiagnosticIfHasErrors(results.errs.length, 
					textDocument, 
					m, 
					'This stylus quasar variable doesn\'t exist or is mispelled', 
					diagnostics);
			}
		}
	}
}