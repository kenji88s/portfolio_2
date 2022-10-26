const figure = {
	string_title: addclass => {
		var judge = config.svgChange.breakpoint <= $(window).width();
		var source_code = '<svg id="textTitleContainer"';
		source_code += (addclass == config.windowLoading.addclass ? `class="${addclass}"` : '');
		source_code += (judge ? 'viewBox="0 0 800 180" width="800" height="180">' : 'viewBox="0 0 300 100" width="100%" height="400">');
		source_code += (judge ? '<text x="400" y="90" class="text">Welcome to My Portfolio</text>' : '<text x="38%" y="30%" class="text">Welcome to</text><text x="58%" y="70%" class="text">My Portfolio</text>');
		source_code += '</svg>';
		return source_code;
	},
	icon1: () => {
		let source_code = '<div class="figureMenu">';
		source_code += '<span></span>';
		source_code += '<span></span>';
		source_code += '<span></span>';
		source_code += '</div>';
		return source_code;
	},
	icon2: () => {
		let source_code = '<svg class="figureClose" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" ';
		source_code += 'fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
		source_code += '<line x1="18" y1="6" x2="6" y2="18"></line>';
		source_code += '<line x1="6" y1="6" x2="18" y2="18"></line>';
		source_code += '</svg>';
		return source_code;
	},
	arrow1: () => {
		let source_code = '<svg class="figureArrow" xmlns="http://www.w3.org/2000/svg" ';
		source_code += 'width="141.732px" height="70.866px" viewBox="-42.605 -25.455 141.732 70.866">';
		source_code += '<path fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" ';
		source_code += 'd="M-28.432-18.369 l56.695,56.693l56.691-56.693"/>';
		source_code += '</svg>';
		return source_code;
	},
	arrow2: () => {
		let source_code = '<svg class="figureArrow" xmlns="http://www.w3.org/2000/svg" ';
		source_code += 'width="141.732px" height="70.866px" viewBox="-42.605 -25.455 141.732 70.866">';
		source_code += '<path fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" ';
		source_code += 'd="M84.954,38.323 L28.259-18.369l-56.69,56.692"/>';
		source_code += '</svg>';
		return source_code;
	},
	loading1: () => {
		let source_code = '<div class="building_square">';
		for (let i = 0; i < 9; i++) {
			source_code += '<div class="square"></div>';
		};
		source_code += '</div>';
		return source_code;
	},
	loading2: () => {
		let source_code = '<div class="half_circles">';
		source_code += '<div class="circle circle_1"></div>';
		source_code += '<div class="circle circle_2"></div>';
		source_code += '</div>';
		return source_code;
	},
};