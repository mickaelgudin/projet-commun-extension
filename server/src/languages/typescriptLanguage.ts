import { generateRegEx } from '../utils'

export default class TypeScriptLanguage{

	static getRegexForTypescript(): string {
		let reg:string = TypeScriptLanguage.getVueDecoratorRegex() + '|' ;
		reg += TypeScriptLanguage.getMeteorFunctionsRegex() + '|';
		reg += TypeScriptLanguage.getVueRouterRegex()+ '|';
		reg += TypeScriptLanguage.getCypressReg();
		return reg;
	}

	static getVueDecoratorRegex(): string {
		return '(Mixi?n?g?s?)|@(((V?)Mod?e?l?)(Sy?n?c?)?|(Wa?t?c?h?)|(Em?i?t?)|(Co?m?p?o?n?e?n?t?)|(In?j?e?c?t?(R?e?a?c?t?i?v?e?))|(Pro((p(S?y?n?c?))?(v?i?d?e?(Re?a?c?t?i?v?e?)?)?)))';
	}

	static getMeteorFunctionsRegex(): string {
		return 'Meteor[.](st?a?r?t?u?p?|me?t?h?o?d?s?|pu?b?l?i?s?h?)';
	}

	static getVueRouterRegex(): string {
		return 'new VueRo?u?t?e?r?';
	}

	static getCypressReg(): string {
		return 'Cypre?s?s?[.]?('+generateRegEx(TypeScriptLanguage.getCypressElementsReg())+')?';
	}

	static getCypressElementsReg(): string[] {
		return [
			//Cypress.commands
			'Comman?d?s?[.]?(ad?d?|ov?e?r?w?r?i?t?e?)?',
			//Cypress.cookies
			'Cook?i?e?s?[.]?(debu?g?|pr?e?s?e?r?v?e?O?n?c?e?|defa?u?l?t?s?)?',
			//Cypress.Screnshot
			'Screens?h?o?t?[.]?(defa?u?l?t?s?)?',
			//Cypress.SelectorPlayground
			'Sele?c?t?o?r?P?l?a?y?g?r?o?u?n?d?[.]?(de?f?a?u?l?t?s?|ge?t?S?e?l?e?c?t?o?r?)?',
			//Cypress.Server
			'(Serv?e?r?[.]?(de?f?a?u?l?t?s?)?)',
			//Cypress.arch
			'ar?c?h?',
			//Cypress.browser
			'br?o?w?s?e?r?',
			//Cypress.dom (all methods)
			'dom[.](is?(Hi?d?d?e?n?|At?t?a?c?h?e?d?|Desc?e?n?d?e?n?t?|Deta?c?h?e?d?|Docu?m?e?n?t?|Dom|El?e?m?e?n?t?|Fo?c?u?s?(ab?l?e?|ed?)?|Jq?u?e?r?y?|Sc?r?o?l?l?a?b?l?e?|Vi?s?i?b?l?e?|Wi?n?d?o?w?)?|(un)?wr?a?p?)?',
			//Cypress.isBrowser
			'isBr?o?w?s?e?r?',
			//Cypress.isCy
			'isCy?',
			//Cypress.log
			'log?',
			//Cypress.platform
			'plat?f?o?r?m?',
			//Cypress.spec
			'spe?c?',
			//Cypress.testingType
			'tes?t?i?n?g?T?y?p?e?',
			//Cypress.version
			've?r?s?i?o?n?',
			//Cypress.config
			'confi?g?',
			//Cypress.env
			'en?v?'
		];
	}
}