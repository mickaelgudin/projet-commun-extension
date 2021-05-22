
export default class StylusLanguage{
	static getRegStylusVariables() : string {
		let reg = "(\\$ac?t?i?o?n?-?s?h?e?e?t?-?((av?a?t?a?r?-?p?a?d?d?i?n?g?)|(bac?k?g?r?o?u?n?d?)|(bor?d?e?r?-?r?a?d?i?u?s?)|(fo?n?t?-?s?i?z?e?)|(ho?v?e?r?-?b?a?c?k?g?r?o?u?n?d?)|(marg?i?n?-?b?o?t?t?o?m?)|(max-?w?i?d?t?h?)?)?)|";
		reg += "(\\$backdrop-(ba?c?k?g?r?o?u?n?d?|op?a?c?i?t?y?)?)|";
		reg += "(\\$breadcrumb-(ac?t?i?v?e?|hei?g?h?t?|hov?e?r?|pr?i?m?a?r?y?|ra?d?i?u?s?|seco?n?d?a?r?y?|sepa?r?a?t?o?r?)?)|";
		reg+= "(\\$button-(big?|small?)-?(ci?r?c?u?l?a?r?-?s?i?z?e?|fo?n?t?-?s?i?z?e?|ic?o?n?-?s?i?z?e?|mi?n?-?h?e?i?g?h?t?|pa?d?d?i?n?g?)?)|";
		reg+= "(\\$button-(bord?e?r?-?r?a?d?i?u?s?|box-?s?h?a?d?o?w?|ci?r?c?u?l?a?r?-?s?i?z?e?|font-si?z?e?|font-we?i?g?h?t?|ic?o?n?-?s?i?z?e?|mar?g?i?n?|min?-?h?e?i?g?h?t?|pad?d?i?n?g?))|";
		reg += "(\\$button-text?-?t?r?a?n?s?f?o?r?m?)|";
		reg += "(\\$card?-(border-radius|box-shadow|padding-horizontal|padding-vertical))|";
		reg += "(\\$chat-message?-(font-size|offset|other-background|other-color|other-pointer-transform|pointer-size|pointer-top|you-background|you-color|you-pointer-transform))|";
		reg += "(\\$chat-date?-(color|font-size))|";
		reg += "(\\$checkbox?-(border-radius|border-width|size|tick-thickness))|";
		reg += "(\\$drawer?-(background|border|box-shadow|font-size|header-font-size|icon-font-size|screen-width-threshold|width))|";
		reg += "(\\$form?-(active-color|border|border-radius|darker-color|lighter-color|shadow))|";
		reg += "(\\$generic?-(border-radius|input-border-width|input-size|margin))|";
		reg += "(\\$grid?-(big-gutter|cols|large-gutter|medium-gutter|small-gutter))|";
		reg += "(\\$icon?-(font-family|font-style|font-weight|letter-spacing|text-transform))|";
		reg += "(\\$item?-(content-label-color|label-color|primary-secondary-color))|";
		reg += "(\\$label?-(before-transform|border-radius|font-size|padding-horizontal|padding-vertical))|";
		reg += "(\\$layout?-(big|border|footer-shadow|header-shadow|medium|small|toolbar-min-height))|";
		reg += "(\\$modal?-(background|body-color|body-padding|body-text-align|border-radius|buttons-padding|header-font-size|header-padding|header-text-align|height|max-height|max-width|scroll-size|slim-body-padding|width))|";
		reg += "(\\$progress?-(border-radius|default-track-color|margin|track-color|track-desktop-height|track-height|transition))|";
		reg += "(\\$pull-to-refresh-(color|font-size|icon-size))|";
		reg += "(\\$radio-(border|border-width|picker-size|size|tick-thickness))|";
		reg += "(\\$range-(color|handle-box-shadow|handle-radius|handle-size|height|mark-height|track-height))|";
		reg += "(\\$rating-(active-grade-color|grade-color|grade-exselected-color|shadow))|";
		reg += "(\\$slider-(arrow-size|button-size|dots-size|min-height|opacity|opacity-active|ovelay-color|padding))|";
		reg += "(\\$table-(border|highlight-color|stripe-color))|";
		reg += "(\\$tabs-(active-border-bottom|active-color|background|big-screen-side-padding|big-window-font-size|big-window-font-weight|big-window-icon-font-size|big-window-label-margin|big-window-min-height|border-bottom|color|font-size|font-weight|highlight-color|icon-font-size|label-margin|min-height|order|padding|text-transform))|";
		reg += "(\\$textfield-(border-color|border-size|border-style|focus-background|focus-border-color|font-size|padding-horizontal|padding-vertical))|";
		reg += "(\\$timeline-(badge-size|border-width|color|item-padding|light-color))|";
		reg += "(\\$toolbar-(active-color|background|color|faded-color|padding|title-font-size))|";
		reg += "(\\$tooltip-(background|border-radius|box-shadow|color|padding))|";
		reg += "(\\$tree-(connector-color|highlight-background|highlight-color|label-border-radius|label-padding))|";
		reg += "(\\$uploader-(failed-background|failed-color|file-max-width|font-size|img-max-height|progressbar-height))|";
		reg += "(\\$z-(absolute|body-dimmed|drawer|fab|marginals|modal|popover|toast|tooltip))|";
		reg += "(\\$light-?(dimmed-background)?)|";
		reg += "(\\$datatable-(border|font-size))|";
		reg += "(\\$datetime-(color|range-space))|";
		reg += "(\\$chat-(font-weight|box-shadow))|";
		reg += "(\\$link-(color|color-active))|";
		reg += "(\\$popover-(background|box-shadow))|";
		reg += "(\\$shadow-(color|transition))|";
		reg += "(\\$dark|\\$dimmed-background|\\$fab-margin|\\$faded|\\$has-error|\\$info|\\$ios-statusbar-height|\\$loading-background|\\$media-avatar-box-shadow|\\$negative|\\$paralax-text-shadow|\\$picker-textfield-min-width|\\$positive|\\$primary|\\$secondary|\\$tertiary|\\$toggle-size|\\$toggle-width-factor|\\$typography-font-family|\\$warning|\\$white)";

		return reg;
	}

	static getStylusVariables(): string[] {
		return [
			"$action-sheet-avatar-padding",
			"$action-sheet-background",
			"$action-sheet-border-radius",
			"$action-sheet-font-size",
			"$action-sheet-hover-background",
			"$action-sheet-margin-bottom",
			"$action-sheet-max-width",
			"$backdrop-background",
			"$backdrop-opacity",
			"$breadcrumb-active",
			"$breadcrumb-height",
			"$breadcrumb-hover",
			"$breadcrumb-primary",
			"$breadcrumb-radius",
			"$breadcrumb-secondary",
			"$breadcrumb-separator",
			"$button-big-circular-size",
			"$button-big-font-size",
			"$button-big-icon-size",
			"$button-big-min-height",
			"$button-big-padding",
			"$button-border-radius",
			"$button-box-shadow",
			"$button-circular-size",
			"$button-font-size",
			"$button-font-weight",
			"$button-icon-size",
			"$button-margin",
			"$button-min-height",
			"$button-padding",
			"$button-small-circular-size",
			"$button-small-font-size",
			"$button-small-icon-size",
			"$button-small-min-height",
			"$button-small-padding",
			"$button-text-transform",
			"$card-border-radius",
			"$card-box-shadow",
			"$card-padding-horizontal",
			"$card-padding-vertical",
			"$chat-box-shadow",
			"$chat-date-color",
			"$chat-date-font-size",
			"$chat-font-weight",
			"$chat-message-font-size",
			"$chat-message-offset",
			"$chat-message-other-background",
			"$chat-message-other-color",
			"$chat-message-other-pointer-transform",
			"$chat-message-pointer-size",
			"$chat-message-pointer-top",
			"$chat-message-you-background",
			"$chat-message-you-color",
			"$chat-message-you-pointer-transform",
			"$chat-other-date-margin",
			"$chat-you-date-margin",
			"$checkbox-border-radius",
			"$checkbox-border-width",
			"$checkbox-size",
			"$checkbox-tick-thickness",
			"$dark",
			"$datatable-border",
			"$datatable-font-size",
			"$datetime-color",
			"$datetime-range-space",
			"$dimmed-background",
			"$drawer-background",
			"$drawer-border",
			"$drawer-box-shadow",
			"$drawer-font-size",
			"$drawer-header-font-size",
			"$drawer-icon-font-size",
			"$drawer-screen-width-threshold",
			"$drawer-width",
			"$fab-margin",
			"$faded",
			"$form-active-color",
			"$form-border",
			"$form-border-radius",
			"$form-darker-color",
			"$form-lighter-color",
			"$form-shadow",
			"$generic-border-radius",
			"$generic-input-border-width",
			"$generic-input-size",
			"$generic-margin",
			"$grid-big-gutter",
			"$grid-cols",
			"$grid-large-gutter",
			"$grid-medium-gutter",
			"$grid-small-gutter",
			"$has-error",
			"$icon-font-family",
			"$icon-font-style",
			"$icon-font-weight",
			"$icon-letter-spacing",
			"$icon-text-transform",
			"$info",
			"$ios-statusbar-height",
			"$item-content-label-color",
			"$item-label-color",
			"$item-primary-secondary-color",
			"$label-before-transform",
			"$label-border-radius",
			"$label-font-size",
			"$label-padding-horizontal",
			"$label-padding-vertical",
			"$layout-big",
			"$layout-border",
			"$layout-footer-shadow",
			"$layout-header-shadow",
			"$layout-medium",
			"$layout-small",
			"$layout-toolbar-min-height",
			"$light",
			"$light-dimmed-background",
			"$link-color",
			"$link-color-active",
			"$loading-background",
			"$media-avatar-box-shadow",
			"$modal-background",
			"$modal-body-color",
			"$modal-body-padding",
			"$modal-body-text-align",
			"$modal-border-radius",
			"$modal-buttons-padding",
			"$modal-header-font-size",
			"$modal-header-padding",
			"$modal-header-text-align",
			"$modal-height",
			"$modal-max-height",
			"$modal-max-width",
			"$modal-scroll-size",
			"$modal-slim-body-padding",
			"$modal-width",
			"$negative",
			"$paralax-text-shadow",
			"$picker-textfield-min-width",
			"$popover-background",
			"$popover-box-shadow",
			"$positive",
			"$primary",
			"$progress-border-radius",
			"$progress-default-track-color",
			"$progress-margin",
			"$progress-track-color",
			"$progress-track-desktop-height",
			"$progress-track-height",
			"$progress-transition",
			"$pull-to-refresh-color",
			"$pull-to-refresh-font-size",
			"$pull-to-refresh-icon-size",
			"$radio-border",
			"$radio-border-width",
			"$radio-picker-size",
			"$radio-size",
			"$radio-tick-thickness",
			"$range-active-color",
			"$range-color",
			"$range-handle-box-shadow",
			"$range-handle-radius",
			"$range-handle-size",
			"$range-height",
			"$range-mark-height",
			"$range-track-height",
			"$rating-active-grade-color",
			"$rating-grade-color",
			"$rating-grade-exselected-color",
			"$rating-shadow",
			"$secondary",
			"$shadow-color",
			"$shadow-transition",
			"$slider-arrow-size",
			"$slider-button-size",
			"$slider-dots-size",
			"$slider-min-height",
			"$slider-opacity",
			"$slider-opacity-active",
			"$slider-ovelay-color",
			"$slider-padding",
			"$table-border",
			"$table-highlight-color",
			"$table-stripe-color",
			"$tabs-active-border-bottom",
			"$tabs-active-color",
			"$tabs-background",
			"$tabs-big-screen-side-padding",
			"$tabs-big-window-font-size",
			"$tabs-big-window-font-weight",
			"$tabs-big-window-icon-font-size",
			"$tabs-big-window-label-margin",
			"$tabs-big-window-min-height",
			"$tabs-border-bottom",
			"$tabs-color",
			"$tabs-font-size",
			"$tabs-font-weight",
			"$tabs-highlight-color",
			"$tabs-icon-font-size",
			"$tabs-label-margin",
			"$tabs-min-height",
			"$tabs-order",
			"$tabs-padding",
			"$tabs-text-transform",
			"$tertiary",
			"$textfield-border-color",
			"$textfield-border-size",
			"$textfield-border-style",
			"$textfield-focus-background",
			"$textfield-focus-border-color",
			"$textfield-font-size",
			"$textfield-padding-horizontal",
			"$textfield-padding-vertical",
			"$timeline-badge-size",
			"$timeline-border-width",
			"$timeline-color",
			"$timeline-item-padding",
			"$timeline-light-color",
			"$toggle-size",
			"$toggle-width-factor",
			"$toolbar-active-color",
			"$toolbar-background",
			"$toolbar-color",
			"$toolbar-faded-color",
			"$toolbar-padding",
			"$toolbar-title-font-size",
			"$tooltip-background",
			"$tooltip-border-radius",
			"$tooltip-box-shadow",
			"$tooltip-color",
			"$tooltip-padding",
			"$tree-connector-color",
			"$tree-highlight-background",
			"$tree-highlight-color",
			"$tree-label-border-radius",
			"$tree-label-padding",
			"$typography-font-family",
			"$uploader-failed-background",
			"$uploader-failed-color",
			"$uploader-file-max-width",
			"$uploader-font-size",
			"$uploader-img-max-height",
			"$uploader-progressbar-height",
			"$warning",
			"$white",
			"$z-absolute",
			"$z-body-dimmed",
			"$z-drawer",
			"$z-fab",
			"$z-marginals",
			"$z-modal",
			"$z-popover",
			"$z-toast",
			"$z-tooltip"
		]
	}

}