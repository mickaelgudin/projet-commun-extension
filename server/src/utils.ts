import {
	Diagnostic,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

export function createDiagnostic(type: DiagnosticSeverity, textDocument: TextDocument, 
										m: RegExpExecArray, msg: string) : Diagnostic{
	return {
		severity: type,
		range: {
			start: textDocument.positionAt(m.index),
			end: textDocument.positionAt(m.index + m[0].length)
		},
		message: msg,
		source: 'ex'
	};
}

export function getLanguage(textDocument: TextDocument, text: string, m: RegExpExecArray ): string {
	if(textDocument.languageId == 'jade' || textDocument.languageId == 'stylus') {
		return textDocument.languageId;
	} 

	if(textDocument.languageId == 'vue') {
		let textBeforeOccurrence =  text.substring(0, (m.index)-1);
		let textAfterOccurrence =  text.substring(m.index+m[0].length);

		if(textBeforeOccurrence.includes('<template lang="pug">') && textAfterOccurrence.includes("</template>")) {
			return 'vue-jade';
		} else if(textBeforeOccurrence.includes('<script lang="ts">') && textAfterOccurrence.includes("</script>")) {
			return 'vue-typescript';
		} else if(textBeforeOccurrence.includes('<style lang="stylus">') && textAfterOccurrence.includes('</style>') ) {
			return 'stylus';
		}
	}

	return '';
}

/**
 * construct reg : (reg1)|(reg2) for all elements in regExArr
 * @param regExArr array containing all regs to concat
 * @returns string regex contrusted as in the description
 */
export function generateRegEx(regExArr: string[]): string {
	let regEx:string = '';

	regExArr.forEach(function(e) {
		regEx += '(' + e + ')|';
	});
	regEx = regEx.slice(0, -1);

	return regEx;
}