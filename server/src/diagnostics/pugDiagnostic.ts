import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage, createDiagnosticIfHasErrors} from '../utils';
import PugLanguage from '../languages/pugLanguage';
import TypeScriptDiagnosticHandler from './typescriptDiagnostic';
import {parse, ParseResult} from '../syntaxes/svgParser'
import {QuasarParser, ParseResultQuasar} from '../syntaxes/quasarParser'
import {HtmlAndVueParser, ParseResultHtmlAndVue} from '../syntaxes/HtmlAndVueParser'
import {QuasarClassesParser, ParseResultClassesQuasar} from '../syntaxes/QuasarClassesParser'

export default class PugDiagnosticHandler {
	tsDiagnosticHandler: TypeScriptDiagnosticHandler = new TypeScriptDiagnosticHandler();

	launchDiagnosticPug(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number, 
		diagnostics: Diagnostic[]) {
		let pattern = RegExp(PugLanguage.getQuasarReg(), 'gi');
		let m: RegExpExecArray | null;
		
		//QUASAR COMPONENTS DIAGNOSTIC
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length < 3 ) continue; //excluding if not in pug template

			this.doQuasarComponentsDiagnostic(m, textDocument, text, diagnostics);
			problems = diagnostics.length;
		}

		//SVG COMPONENTS DIAGNOSTIC
		pattern = RegExp(PugLanguage.getSvgReg(), 'gi');
		//diagnostic svg in pug file and template pug in vue file
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue;

			this.doSvgComponentsDiagnostic(m, textDocument, text, diagnostics);
			problems = diagnostics.length;
		}

		//HTML AND VUE ELEMENTS DIAGNOSTIC
		pattern = RegExp(PugLanguage.getHtmlAndVueReg(), 'gi');
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue; //excluding if not in pug template

			this.doHmlAndVueComponentsDiagnostic(m, textDocument, text, diagnostics);
			problems = diagnostics.length;
		}

		//String interpolation DIAGNOSTIC
		pattern = RegExp(PugLanguage.getStringInterpolationRegex(), 'gi');
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue; //excluding if not in pug template

			let currentLanguage: string = getLanguage(textDocument, text, m);
			if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {

				//the string interpolation isn't of the form : {{attribute}} or {{method()}}
				if( !PugLanguage.isWellFormedStringInterpolation(m[0]) ) {
					diagnostics.push(
						createDiagnostic(DiagnosticSeverity.Information, textDocument, m, `${m[0]} string interpolation should be formed like : {{attribute}} or {{method()}} `)
					);
				}
			} 
			problems = diagnostics.length;
		}

		//quasar helper classes inside pug template class attributes
		pattern = RegExp(PugLanguage.getQuasarHelperClassesReg(), 'gi');
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue; //excluding if not in pug template

			let currentLanguage: string = getLanguage(textDocument, text, m);
			if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
				let quasarClassesParser:QuasarClassesParser = new QuasarClassesParser(m[0].replace('class=\"', ''));
				let results:ParseResultClassesQuasar= quasarClassesParser.parse();

				createDiagnosticIfHasErrors(results.errs.length, 
											textDocument, 
											m, 
											'This quasar helper class doesn\'t exist or is mispelled', 
											diagnostics);
			} 
			problems = diagnostics.length;
		}
		
	}

	doQuasarComponentsDiagnostic(m:RegExpExecArray, textDocument:TextDocument, text:string, diagnostics: Diagnostic[]) {
		let currentLanguage: string = getLanguage(textDocument, text, m);

		let quasarParser:QuasarParser = new QuasarParser(m[0]);
		let results:ParseResultQuasar = quasarParser.parse();
		let message:string = '';

		if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
			message = 'This quasar component doesn\'t exist or is mispelled';
		} 
		else if(currentLanguage === 'vue-typescript' ) {
			message = 'This quasar component should be written in the template';
		}

		createDiagnosticIfHasErrors(results.errs.length, 
									textDocument, 
									m, 
									message, 
									diagnostics);
	}

	doSvgComponentsDiagnostic(m:RegExpExecArray, textDocument:TextDocument, text:string, diagnostics: Diagnostic[]) {
		let currentLanguage: string = getLanguage(textDocument, text, m);
		if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
			let results:ParseResult = parse(m[0]);

			createDiagnosticIfHasErrors(results.errs.length, 
										textDocument, 
										m, 
										'This svg component doesn\'t exist or is mispelled', 
										diagnostics);
		} 
	}

	doHmlAndVueComponentsDiagnostic(m:RegExpExecArray, textDocument:TextDocument, text:string, diagnostics: Diagnostic[]) {
		let currentLanguage: string = getLanguage(textDocument, text, m);
		if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
			let htmlVueParser:HtmlAndVueParser = new HtmlAndVueParser(m[0]);
			let results:ParseResultHtmlAndVue = htmlVueParser.parse();

			createDiagnosticIfHasErrors(results.errs.length, 
										textDocument, 
										m, 
										'This html or vue element doesn\'t exist or is mispelled', 
										diagnostics);
		} 
	}
}