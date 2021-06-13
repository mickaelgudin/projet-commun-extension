import { generateRegEx } from '../utils';

export default class PugLanguage{
	//get regex for quasar elements
	static getQuasarReg(): string {
		return '(q-)(' + generateRegEx(PugLanguage.getQuasarRegElements()) + ')';
	}

	static getQuasarHelperClassesReg() {
		//todo julien : s'inspirer de la méthode getQuasarReg
	}

	static getQuasarHelperClassesElements(): string[] {
		//todo julien : s'inspirer de la méthode getQuasarRegElements
		//les éléments sont à partir de la ligne 927 du snippets snippets/pug.code-snippets.json
		return [
			
		];
	}

	static getQuasarRegElements(): string[] {
		return [
			'aja?x?-?b?a?r?', //q-ajax-bar
			'av?a?t?a?r?', //q-avatar
			'badg?e?', //q-badge
			'bann?e?r?',  //q-banner
			'bar?', //q-bar
			'bre?a?d?c?r?u?m?b?s?', //q-breadcrumbs
			'(btn?-?)((gr?o?u?p?)|(dr?o?p?d?o?w?n?)|(to?g?g?l?e?))?', //q-btn, q-btn-group, q-btn-dropdown, q-toggle
			'chec?k?b?o?x?', //q-checkbox
			'col?o?r?', //q-color
			'card', //q-card
			'carou?s?e?l?', //q-carousel
			'chip?', //q-chip
			'cir?c?u?l?a?r?-?p?r?o?g?r?e?s?s?', //q-circular-progress
			'chat?-?m?e?s?s?a?g?e?', //q-chat-message
			'dat?e?', //q-date
			'dia?l?o?g?', //q-dialog
			'edi?t?o?r?', //q-editor
			'exp?a?n?s?i?o?n?-?i?t?e?m?', //expansion-item
			'fiel?d?', //q-field
			'file?', //q-file
			'for?m?', //q-form
			'ico?n?', //q-icon
			'img?', //q-img
			'infi?n?i?t?e?-?s?c?r?o?l?l?', //q-infinite-scroll
			'inne?r?-?l?o?a?d?i?n?g?', //q-inner-loading
			'inpu?t?', //q-input
			'inte?r?s?e?c?t?i?o?n?', //q-intersection,
			'kn?o?b?', //q-knob
			'lay?o?u?t?', //q-layout
			'line?a?r?-?p?r?o?g?r?e?s?s?', //q-linear-progress
			'list?', //q-list
			'mar?k?u?p?-?t?a?b?l?e?', //q-markup-table
			'men?u?', //q-menu
			'op?t?i?o?n?-?g?r?o?u?p?', //q-option-group
			'pagin?a?t?i?o?n?', //q-pagination
			'radi?o?', //q-radio
			'rang?e?', //q-range
			'res?i?z?e?-?o?b?s?e?r?v?e?r?', //q-resize-observer
			'scr?o?l?l?-?o?b?s?e?r?v?e?r?', //q-scroll-observer
			'sele?c?t?', //q-select
			'sepa?r?a?t?o?r?', //q-separator
			'sli?d?e?r?', //q-slider
			'table?', //q-table
			'tim?e?', //q-time
			'togg?l?e?', //q-toggle
		];
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

	//get regex html and vue elements
	static getHtmlAndVueReg() {
		return generateRegEx(PugLanguage.getHtmlAndVueRegElements() );
	}

	//setting regex for each element of html and vue languages
	static getHtmlAndVueRegElements(): string[] {
		return [
			":ke?y?", //:key
			'(appear|enter|leave)-((ac?t?i?v?e?-?c?l?a?s?s?)|(cl?a?s?s?)|(to?-?c?l?a?s?s?))', //(appear|enter|leave)-(active-class|class|to-class)
			'component?', //component
			'img?', //img
			'input?', //input
			'keep-a?l?i?v?e?', //keep-alive
			'(router)-((li?n?k?)|(vi?e?w?))', //router-link, router-view
			'slot:?s?c?o?p?e?', //slot:scope
			'scop?e?', //scope
			'span?', //span
			'transition-?gr?o?u?p?', //transition-group
			'v-bi?n?d?', //v-bind
			'v-clo?a?k?', //v-cloak
			'v-els?e?-?i?f?', //v-else-if
			'v-fo?r?', //v-for
			'v-ht?m?l?', //v-html
			'v-if?', //v-if
			'v-mo?d?e?l?', //v-model
			'v-on?c?e?', //v-once
			'v-pr?e?', //v-pre
			'v-sh?o?w?', //v-show
			'v-te?x?t?', //v-text
			':src?', //:src
			':st?y?l?e?', //:style
			':class?', //:class
			'type?', //type
			'name?', //name
			'placehol?d?e?r?', //placeholder
			'value?' //value
		];
	}

}