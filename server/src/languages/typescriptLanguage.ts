export default class TypeScriptLanguage{

	static getVueDecoratorRegex(): string {
		return '(Mixi?n?g?s?)|@(((V?)Mod?e?l?)(Sy?n?c?)?|(Wa?t?c?h?)|(Em?i?t?)|(Co?m?p?o?n?e?n?t?)|(In?j?e?c?t?(R?e?a?c?t?i?v?e?))|(Pro((p(S?y?n?c?))?(v?i?d?e?(Re?a?c?t?i?v?e?)?)?)))';
	}

	static getMeteorFunctionsRegex(): string {
		return 'Meteor[.](st?a?r?t?u?p?|me?t?h?o?d?s?|pu?b?l?i?s?h?)';
	}

	static getVueRouterRegx(): string {
		return 'new VueRo?u?t?e?r?';
	}
}