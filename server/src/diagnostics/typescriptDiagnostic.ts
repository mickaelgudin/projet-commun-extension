import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {parse, ParseResult} from '../syntaxes/typescriptParser'

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage, createDiagnosticIfHasErrors} from '../utils';
import TypeScriptLanguage from '../languages/typescriptLanguage'


export default class TypeScriptDiagnosticHandler {

	//diagnostic vue property decorator and meteor methods and vue router
	launchDiagnosticTypescript(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number,
		diagnostics: Diagnostic[]
		) {

		let reg:string = TypeScriptLanguage.getVueDecoratorRegex() + '|' ;
		reg += TypeScriptLanguage.getMeteorFunctionsRegex() + '|';
		reg += TypeScriptLanguage.getVueRouterRegx();
		
		let pattern = RegExp(reg, 'gi');
		let m = null;
		
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			let currentLanguage: string = getLanguage(textDocument, text, m);
	
			if(currentLanguage === 'vue-typescript') {
				let results:ParseResult = parse(m[0]);

				createDiagnosticIfHasErrors(results.errs.length, 
					textDocument, 
					m, 
					'This vue property decorator doesn\'t exist or is mispelled', 
					diagnostics);
			}
		}
	}
}