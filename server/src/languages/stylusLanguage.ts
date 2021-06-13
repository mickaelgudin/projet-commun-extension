import { generateRegEx } from '../utils';

export default class StylusLanguage{
	static getRegStylusVariables() : string {
		let reg = generateRegEx(StylusLanguage.getStylusVariableRegElements() );
		reg += "\\$dar?k?|\\$dim?m?e?d?-?b?a?c?k?g?r?o?u?n?d?|\\$fab-?m?a?r?g?i?n?|\\$fade?d?|\\$ha?s?-?e?r?r?o?r?|\\$inf?o?|\\$ios?-?s?t?a?t?u?s?b?a?r?-?h?e?i?g?h?t?|\\$load?i?n?g?-?b?a?c?k?g?r?o?u?n?d?|\\$medi?a?-?a?v?a?t?a?r?-?b?o?x?-?s?h?a?d?o?w?|\\$nega?t?i?v?e?|\\$para?l?a?x?-?t?e?x?t?-?s?h?a?d?o?w?|\\$pick?e?r?-?t?e?x?t?f?i?e?l?d?-?m?i?n?-?w?i?d?t?h?|\\$posi?t?i?v?e?|\\$pri?m?a?r?y?|\\$seco?n?d?a?r?y?|\\$tert?i?a?r?y?|\\$togg?l?e?-?(siz?e?|wid?t?h?-?f?a?c?t?o?r?)?|\\$typo?g?r?a?p?h?y?-?f?o?n?t?-?f?a?m?i?l?y?|\\$warn?i?n?g?|\\$whi?t?e?|";
		reg += "(\\$tabs-?(ac?t?i?v?e?-?(bo?r?d?e?r?-?b?o?t?t?o?m?|co?l?o?r?)?|bac?k?g?r?o?u?n?d?|big?-?(sc?r?e?e?n?-?s?i?d?e?-?p?a?d?d?i?n?g?|wi?n?d?o?w?-?(ico?n?-)?((fo?n?t?-?(si?z?e?|we?i?g?h?t?))|la?b?e?l?-?m?a?r?g?i?n?|mi?n?-?h?e?i?g?h?t?)?)?|bor?d?e?r?-?b?o?t?t?o?m?|col?o?r?|font?-?(si?z?e?|we?i?g?h?t?)?|high?l?i?g?h?t?-?c?o?l?o?r?|icon?-?f?o?n?t?-?s?i?z?e?|label?-?m?a?r?g?i?n?|min-he?i?g?h?t?|ord?e?r?|padd?i?n?g?|text-tr?a?n?s?f?o?r?m?)?)";

		return reg;
	}

	static getStylusVariableRegElements(): string[] {
		return [
			//stylus variables starting with $action-sheet
			'\\$ac?t?i?o?n?-?s?h?e?e?t?-?((av?a?t?a?r?-?p?a?d?d?i?n?g?)|(bac?k?g?r?o?u?n?d?)|(bor?d?e?r?-?r?a?d?i?u?s?)|(fo?n?t?-?s?i?z?e?)|(ho?v?e?r?-?b?a?c?k?g?r?o?u?n?d?)|(marg?i?n?-?b?o?t?t?o?m?)|(max-?w?i?d?t?h?)?)?',
			
			//$backdrop-background and $backdrop-opacity 
			'\\$backdrop-(ba?c?k?g?r?o?u?n?d?|op?a?c?i?t?y?)?',
			
			//stylus variables starting with $breadcrumb
			'\\$breadcrumb-(ac?t?i?v?e?|hei?g?h?t?|hov?e?r?|pr?i?m?a?r?y?|ra?d?i?u?s?|seco?n?d?a?r?y?|sepa?r?a?t?o?r?)?',
			
			//stylus variables starting with $button
			'\\$button-(big?|small?)-?(ci?r?c?u?l?a?r?-?s?i?z?e?|fo?n?t?-?s?i?z?e?|ic?o?n?-?s?i?z?e?|mi?n?-?h?e?i?g?h?t?|pa?d?d?i?n?g?)?',
			'\\$button-text?-?t?r?a?n?s?f?o?r?m?',
			
			//stylus variables starting with $card
			'\\$card?-?(bord?e?r?-?r?a?d?i?u?s?|bo?x?-?s?h?a?d?o?w?|pa?d?d?i?n?g?-?(h?o?r?i?z?o?n?t?a?l?|ve?r?t?i?c?a?l?)?)?',
			
			//stylus variables starting with $light
			'\\$ligh?t?-?(d?i?m?m?e?d?-?b?a?c?k?g?r?o?u?n?d?)?',
			
			//$datatable-border, $datatable-font-size 
			'\\$datat?a?b?l?e?-?(b?o?r?d?e?r?|f?o?n?t?-?s?i?z?e?)?',
			
			//$datetime-color, $datetime-range-space
			'\\$datet?i?m?e?-?(c?o?l?o?r?|r?a?n?g?e?-?s?p?a?c?e?)?',
			
			//stylus variables starting with $chat
			'\\$chat-(date-)?(co?l?o?r?|font-si?z?e?|font-we?i?g?h?t?|bo?x?-?s?h?a?d?o?w?|messag?e?-?(fo?n?t?-?s?i?z?e?|off?s?e?t?|oth?e?r?-?(ba?c?k?g?r?o?u?n?d?|co?l?o?r?|po?i?n?t?e?r?-?t?r?a?n?s?f?o?r?m?)?|po?i?n?t?e?r?-?(si?z?e?|to?p?)?|yo?u?-?(ba?c?k?g?r?o?u?n?d?|co?l?o?r?|po?i?n?t?e?r?-?t?r?a?n?s?f?o?r?m?)?)?)?',
			
			//$link-color, $link-color-active
			'\\$link?-?(c?o?l?o?r?(-?a?c?t?i?v?e?)?)?',
			
			//$popover-background, $popover-box-shadow
			'\\$popo?v?e?r?-?(bac?k?g?r?o?u?n?d?|box?-?s?h?a?d?o?w?)?',
			
			//$shadow-color, $shadow-transition
			'\\$sha?d?o?w?-?(c?o?l?o?r?|t?r?a?n?s?i?t?i?o?n?)?',
			
			//stylus variables starting with $table
			'\\$table?-?(b?o?r?d?e?r?|h?i?g?h?l?i?g?h?t?-?c?o?l?o?r?|s?t?r?i?p?e?-?c?o?l?o?r?)?',

			//stylus variables starting with $item
			'\\$item?-?(c?o?n?t?e?n?t?-?l?a?b?e?l?-?c?o?l?o?r?|l?a?b?e?l?-?c?o?l?o?r?|p?r?i?m?a?r?y?-?s?e?c?o?n?d?a?r?y?-?c?o?l?o?r?)?',

			//stylus variables starting with $grid
			'\\$grid?-?((b?i?g?|l?a?r?g?e?|m?e?d?i?u?m?|s?m?a?l?l?)-?g?u?t?t?e?r?|c?o?l?s?)?',

			//stylus variables starting with $toolbar
			'\\$toolba?r?-?((tit?l?e?-?f?o?n?t?-?s?i?z?e?)|a?c?t?i?v?e?-?c?o?l?o?r?|b?a?c?k?g?r?o?u?n?d?|c?o?l?o?r?|f?a?d?e?d?-?c?o?l?o?r?|p?a?d?d?i?n?g?)?',

			//stylus variables starting with $pull-to-refresh
			'\\$pul?l?-?t?o?-?r?e?f?r?e?s?h?-?(c?o?l?o?r?|(i?c?o?n?|f?o?n?t?)(-?s?i?z?e?))?',

			//stylus variables starting with $checkbox
			'\\$checkbox?-?((bo?r?d?e?r?-?(r?a?d?i?u?s?|w?i?d?t?h?)?)|(si?z?e?)|(ti?c?k?-?t?h?i?c?k?n?e?s?s?))?',

			//stylus variables starting with $generic
			'\\$generic?-?((b?o?r?d?e?r?-?r?a?d?i?u?s?)|(i?n?p?u?t?-?(b?o?r?d?e?r?|s?i?z?e?)?)|(m?a?r?g?i?n?))?',

			//stylus variables starting with $form
			'\\$form?-?(ac?t?i?v?e?-?c?o?l?o?r?|bo?r?d?e?r?-?(ra?d?i?u?s?)?|da?r?k?e?r?-?c?o?l?o?r?|li?g?h?t?e?r?-?c?o?l?o?r?|sh?a?d?o?w?)?',

			//stylus variables starting with $icon
			'\\$icon?-?(fo?n?t?-?(f?a?m?i?l?y?|s?t?y?l?e?|w?e?i?g?h?t?)?|le?t?t?e?r?-?s?p?a?c?i?n?g?|te?x?t?-?t?r?a?n?s?f?o?r?m?)?',

			//stylus variables starting with $timeline
			'\\$timeline?-?(bad?g?e?-?s?i?z?e?|bor?d?e?r?-?w?i?d?t?h?|co?l?o?r?|it?e?m?-?p?a?d?d?i?n?g?|li?g?h?t?-?c?o?l?o?r?)?',

			//stylus variables starting with $tooltip
			'\\$toolt?i?p?-?(bac?k?g?r?o?u?n?d?|bord?e?r?-?r?a?d?i?u?s?|box-?s?h?a?d?o?w?|co?l?o?r?|pa?d?d?i?n?g?)?',

			//stylus variables starting with $radio
			'\\$radi?o?-?(bo?r?d?e?r?-?(w?i?d?t?h?)?|pi?c?k?e?r?-?s?i?z?e?|si?z?e?|ti?c?k?-?t?h?i?c?k?n?e?s?s?)?',

			//stylus variables starting with $rating
			'\\$ratin?g?-?(ac?t?i?v?e?-?g?r?a?d?e?-?c?o?l?o?r?|gr?a?d?e?-?(c?o?l?o?r?|e?x?s?e?l?e?c?t?e?d?-?c?o?l?o?r?)?|sh?a?d?o?w?)?',

			//stylus variables starting with $layout
			'\\$layout?-?(big?|bor?d?e?r?|fo?o?t?e?r?-?s?h?a?d?o?w?|he?a?d?e?r?-?s?h?a?d?o?w?|me?d?i?u?m?|sm?a?l?l?|to?o?l?b?a?r?-?m?i?n?-?h?e?i?g?h?t?)?',

			//stylus variables starting with $label
			'\\$label?-?(bef?o?r?e?-?t?r?a?n?s?f?o?r?m?|bor?d?e?r?-?r?a?d?i?u?s?|fo?n?t?-?s?i?z?e?|pa?d?d?i?n?g?-?(h?o?r?i?z?o?n?t?a?l?|v?e?r?t?i?c?a?l?)?)?',

			//stylus variables starting with $z
			'\\$z-?(ab?s?o?l?u?t?e?|bo?d?y?-?d?i?m?m?e?d?|dr?a?w?e?r?|fa?b?|mar?g?i?n?a?l?s?|mod?a?l?|po?p?o?v?e?r?|toas?t?|too?l?t?i?p?)?',

			//stylus variables starting with $tree
			'\\$tree?-?(co?n?n?e?c?t?o?r?-?c?o?l?o?r?|hi?g?h?l?i?g?h?t?-?(ba?c?k?g?r?o?u?n?d?|co?l?o?r?)?|la?b?e?l?-?(b?o?r?d?e?r?-?r?a?d?i?u?s?|p?a?d?d?i?n?g?)?)?',

			//stylus variables starting with $range
			'\\$range?-?(co?l?o?r?|ha?n?d?l?e?-?(bo?x?-?s?h?a?d?o?w?|ra?d?i?u?s?|si?z?e?)?|he?i?g?h?t?|ma?r?k?-?h?e?i?g?h?t?|tr?a?c?k?-?h?e?i?g?h?t?)?',

			//stylus variables starting with $drawer
			'\\$drawe?r?-?(bac?k?g?r?o?u?n?d?|bor?d?e?r?|box-?s?h?a?d?o?w?|fo?n?t?-?s?i?z?e?|he?a?d?e?r?-?f?o?n?t?-?s?i?z?e?|ic?o?n?-?f?o?n?t?-?s?i?z?e?|sc?r?e?e?n?-?w?i?d?t?h?-?t?h?r?e?s?h?o?l?d?|w?i?d?t?h?)?',

			//stylus variables starting with $slider
			'\\$slide?r?-?(ar?r?o?w?-?s?i?z?e?|bu?t?t?o?n?-?s?i?z?e?|do?t?s?-?s?i?z?e?|mi?n?-?h?e?i?g?h?t?|opa?c?i?t?y?-?(a?c?t?i?v?e?)?|ovel?a?y?-?c?o?l?o?r?|pa?d?d?i?n?g?)?',
		
			//stylus variables starting with $progress
			'\\$progress?-?(bo?r?d?e?r?-?r?a?d?i?u?s?|de?f?a?u?l?t?-?t?r?a?c?k?-?c?o?l?o?r?|ma?r?g?i?n?|track?-?(c?o?l?o?r?|(d?e?s?k?t?o?p?)?-?h?e?i?g?h?t?)?|trans?i?t?i?o?n?)?',
		
			//stylus variables starting with $textfield
			'\\$textfi?e?l?d?-?(bo?r?d?e?r?-?(c?o?l?o?r?|siz?e?|sty?l?e?)?|focu?s?-?(bac?k?g?r?o?u?n?d?|bor?d?e?r?-?c?o?l?o?r?)?|font?-?s?i?z?e?|pa?d?d?i?n?g?-?(ho?r?i?z?o?n?t?a?l?|ve?r?t?i?c?a?l?)?)?',
		
			//stylus variables starting with $uploader
			'\\$upload?e?r?-?(fai?l?e?d?-?(ba?c?k?g?r?o?u?n?d?|co?l?o?r?)?|fil?e?-?m?a?x?-?w?i?d?t?h?|fon?t?-?s?i?z?e?|im?g?-?m?a?x?-?h?e?i?g?h?t?|pr?o?g?r?e?s?s?b?a?r?-?h?e?i?g?h?t?)?',
			
			//stylus variables starting with $modal
			'\\$modal?-?(bac?k?g?r?o?u?n?d?|bod?y?-?(co?l?o?r?|pa?d?d?i?n?g?|te?x?t?-?a?l?i?g?n?)?|bord?e?r?-?r?a?d?i?u?s?|but?t?o?n?s?-?p?a?d?d?i?n?g?|head?e?r?-?(fo?n?t?-?s?i?z?e?|pa?d?d?i?n?g?|te?x?t?-?a?l?i?g?n?)?|heig?h?t?|ma?x?-?(he?i?g?h?t?|wi?d?t?h?)?|scr?o?l?l?-?s?i?z?e?|sli?m?-?b?o?d?y?-?p?a?d?d?i?n?g?|wi?d?t?h?)?',
		];
	}

}