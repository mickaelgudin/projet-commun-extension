import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {createDiagnostic, getLanguage} from '../utils';
import PugLanguage from '../languages/pugLanguage';
import TypeScriptDiagnosticHandler from './typescriptDiagnostic';

export default class PugDiagnosticHandler {
	tsDiagnosticHandler: TypeScriptDiagnosticHandler = new TypeScriptDiagnosticHandler();

	launchDiagnosticPug(text:string, maxNumberOfProblems: number, textDocument: TextDocument, problems: number, 
		diagnostics: Diagnostic[]) {
		let pattern = RegExp(PugLanguage.getQuasarReg(), 'gi');
		let m: RegExpExecArray | null;

		let allowedComponents: string[] = PugLanguage.getQuasarElements();

		//QUASAR elements DIAGNOSTIC - VUE TEMPLATE PUG AND PUG FILE
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length < 3 ) continue; //excluding if not in pug template

			let currentLanguage: string = getLanguage(textDocument, text, m);

			if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
				this.doDiagnostic(textDocument, allowedComponents, m, diagnostics);
			} else if(currentLanguage === 'vue-typescript' && allowedComponents.includes(m[0] ) ) {
				//typescript shouldn't contain pug elements (only import are allowed so we focus only on lowercase scenario)
				this.tsDiagnosticHandler.diagnosticPresencePugElement(allowedComponents, diagnostics, textDocument, m);
			}

			problems = diagnostics.length;
		}

		//SVG elements DIAGNOSTIC - VUE TEMPLATE PUG AND PUG FILE
		pattern = RegExp(PugLanguage.getSvgReg(), 'gi');
		allowedComponents = PugLanguage.getSvgElements();
		//diagnostic svg in pug file and template pug in vue file
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue; //excluding if not in pug template

			let currentLanguage: string = getLanguage(textDocument, text, m);
			if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
				this.doDiagnostic(textDocument, allowedComponents, m, diagnostics);
			} 

			problems = diagnostics.length;
		}

		//HTML AND VUE ELEMENTS DIAGNOSTIC - VUE TEMPLATE PUG AND PUG FILE
		pattern = RegExp(PugLanguage.getHtmlAndVueReg(), 'gi');
		allowedComponents = PugLanguage.getHtmlAndVueElements();
		//diagnostic svg in pug file and template pug in vue file
		while ((m = pattern.exec(text)) && problems < maxNumberOfProblems) {
			if(m[0].length <= 1 ) continue; //excluding if not in pug template

			let currentLanguage: string = getLanguage(textDocument, text, m);
			if(currentLanguage === 'jade' || currentLanguage === 'vue-jade') {
				this.doDiagnostic(textDocument, allowedComponents, m, diagnostics);
			} 

			problems = diagnostics.length;
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