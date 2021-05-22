
export default class PugLanguage{
	static getQuasarReg(): string {
		let reg:string = '(q-((aja?x?-?b?a?r?)|(av?a?t?a?r?)))|'; //starting with q-aj or q-av
		reg += '(q-((badg?e?)|(bann?e?r?)|(bar?)|(bre?a?d?c?r?u?m?b?s?)))|'; // starting with q-ba or q-br
		reg += '(q-((btn?-?)((gr?o?u?p?)|(dr?o?p?d?o?w?n?)|(to?g?g?l?e?))?))|'; //starting with q-bt
		//quasar components starting with c
		reg += '(q-)((chec?k?b?o?x?)|(col?o?r?)|(card)|(carou?s?e?l?)|(chip?)|(cir?c?u?l?a?r?-?p?r?o?g?r?e?s?s?)|(chat?-?m?e?s?s?a?g?e?))|';
		//other quasar components
		reg += '(q-dat?e?)|(q-dia?l?o?g?)|(q-edi?t?o?r?)|(q-exp?a?n?s?i?o?n?-?i?t?e?m?)|(q-fiel?d?)|(q-file?)|(q-for?m?)|(q-ico?n?)|(q-img?)|(q-infi?n?i?t?e?-?s?c?r?o?l?l?)|(q-inne?r?-?l?o?a?d?i?n?g?)|(q-inpu?t?)|(q-inte?r?s?e?c?t?i?o?n?)|(q-kn?o?b?)|(q-lay?o?u?t?)|(q-line?a?r?-?p?r?o?g?r?e?s?s?)|(q-list?)|(q-mar?k?u?p?-?t?a?b?l?e?)|(q-men?u?)|(q-op?t?i?o?n?-?g?r?o?u?p?)|(q-pa?g?i?n?a?t?i?o?n?)|(q-radi?o?)|(q-rang?e?)|(q-res?i?z?e?-?o?b?s?e?r?v?e?r?)|(q-scr?o?l?l?-?o?b?s?e?r?v?e?r?)|(q-sele?c?t?)|(q-sepa?r?a?t?o?r?)|(q-sli?d?e?r?)|(q-tab?l?e?)|(q-tim?e?)|(q-tog?g?l?e?)';

		return reg;
	}

	static getStringInterpolationRegex(): RegExp {
		return /({)+( )*[a-zA-z0-9()]*(})+/;
	}

	static isWellFormedStringInterpolation(text: string): boolean {
		return /^[^{]*{{( )*[a-zA-z0-9()]+( )*}}[^}]*$/.test(text);
	}

	//get regex for svg component
	static getSvgReg() {
		return '(svg?)|(rect?)|(circl?e?)|(linearGra?d?i?e?n?t?)|(polygo?n?)|(ellips?e?)';
	}

	static getHtmlAndVueReg() {
		return '(:ke?y?)|((appear|enter|leave)-((ac?t?i?v?e?-?c?l?a?s?s?)|(cl?a?s?s?)|(to?-?c?l?a?s?s?)))|(component?)|(img?)|(input?)|(keep-a?l?i?v?e?)|((router)-((li?n?k?)|(vi?e?w?)))|(slot:?s?c?o?p?e?)|(scop?e?)|(span?)|(transition-?gr?o?u?p?)|(v-bi?n?d?)|(v-clo?a?k?)|(v-els?e?-?i?f?)|(v-fo?r?)|(v-ht?m?l?)|(v-if?)|(v-mo?d?e?l?)|(v-on?c?e?)|(v-pr?e?)|(v-sh?o?w?)|(v-te?x?t?)|(:src?)|(:st?y?l?e?)|(:?class?)|(type?)|(name?)|(placehol?d?e?r?)|(value?)';
	}

	static getSvgElements() : string[] {
		return [
			"svg",
			"rect",
			"circle",
			"linearGradient",
			"polygon",
			"ellipse"
		];
	}

	static getQuasarElements(): string[] {
		return [
			"q-ajax-bar",
			"q-avatar",
			"q-badge",
			"q-banner",
			"q-bar",
			"q-breadcrumbs",
			"q-btn",
			"q-btn-group",
			"q-btn-dropdown",
			"q-card",
			"q-carousel",
			"q-chat-message",
			"q-chip",
			"q-circular-progress",
			"q-color",
			"q-dialog",
			"q-editor",
			"q-expansion-item",
			"q-layout",
			"q-input",
			"q-select",
			"q-file",
			"q-form",
			"q-field",
			"q-radio",
			"q-checkbox",
			"q-toggle",
			"q-btn-toggle",
			"q-option-group",
			"q-slider",
			"q-range",
			"q-time",
			"q-date",
			"q-icon",
			"q-img",
			"q-infinite-scroll",
			"q-inner-loading",
			"q-intersection",
			"q-knob",
			"q-linear-progress",
			"q-list",
			"q-markup-table",
			"q-menu",
			"q-resize-observer",
			"q-scroll-observer",
			"q-pagination",
			"q-table",
			"q-separator"
		];
	}

	static getHtmlAndVueElements(): string[] {
		return [
			":key",
			"a",
			"appear-active-class",
			"appear-class",
			"appear-to-class",
			"component",
			"div",
			"enter-active-class",
			"enter-class",
			"enter-to-class",
			"img",
			"input",
			"keep-alive",
			"leave-active-class",
			"leave-class",
			"leave-to-class",
			"ref",
			"router-link",
			"scope",
			"slot",
			"slot:scope",
			"span",
			"tag",
			"transition",
			"transition-group",
			"v-bind",
			"v-cloak",
			"v-else",
			"v-else-if",
			"v-for",
			"v-html",
			"v-if",
			"v-model",
			"v-on",
			"v-once",
			"v-pre",
			"v-show",
			"v-text",
			"router-view",
			"to",
			":src",
			":style",
			":class",
			"class",
			"id",
			"type",
			"name",
			"placeholder",
			"value"
		];
		
	}

}