
export default class PugLanguage{
	static getPugReg(): string {
		let pugArray = PugLanguage.getPugElements(); 
		let reg:string = '';

		//getting component regex insentive to case and containing at least 2 first letters
		pugArray.forEach(function(e) {
			const charsOfComponent =  Array.from(e);
			reg+= '(';

			let count = 0;
			let limit = (e.startsWith('q-')) ? 4 : 2;
			charsOfComponent.forEach(function(c, index){
				
				const optionalChar = (count >= limit) ? '?' : '';
				reg+= '(' + c + '|'+ c.toUpperCase() + ')'+optionalChar;
				count++;
			});

			reg+= ')|';
		});

		reg = reg.slice(0, -1);

		return reg;
	}

	//get regex for svg component
	static getSvgReg() {
		return '(svg?)|(rect?)|(circl?e?)|(linearGra?d?i?e?n?t?)|(polygo?n?)|(ellips?e?)';
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


	static getPugElements(): string[] {
		return ["img",
				"a",
				"div",
				"span",
				"q-input",
				"q-infinite-scroll", 
				"q-inner-loading",
				"q-intersection",
				"q-card",
				"q-carousel",
				"q-chat-message",
				"q-chip",
				"q-circular-progress",
				"q-color",
				"q-checkbox",
				"button",
				"q-btn",
				"q-btn-group",
				"q-btn-dropdown",
				"q-btn-toggle",
				"q-badge",
				"q-banner",
				"q-bar",
				"q-breadcrumbs",
				"q-img"
			];
	}

}