new Vue({
	methods: {
		window: onload = function () {
			height_match();
			gnavi_sink();
			window_loading.then();
			vd.svgSource = figure['string_title']('');
		},
		window: onscroll = function () {
			height_match();
			bg_effect();
			item_transit();
			gnavi_sink();
		},
		window: onresize = function () {
			height_match();
			$(config.gnaviInfo.target).removeClass(config.gnaviInfo.toggleclass);
			vd.svgSource = figure['string_title'](config.windowLoading.addclass);
		},
	}
});

function bg_effect() {
	$(config.bgEffect.point).each(function () {
		var lvTargettop = $(this).offset().top;
		var lvScrolltop = $(window).scrollTop();
		var lvWindowheight = $(window).height();
		if (lvScrolltop > lvTargettop - lvWindowheight + 100) {
			var lvCurrent = $(this).attr(config.bgEffect.pointAttr);
			$(config.bgEffect.target).attr(config.bgEffect.targetAttr, lvCurrent);
			btn_currentinfo(`#${lvCurrent}`);
		}
	});
};

function item_transit() {
	$(config.itemTransit.target).each(function () {
		var lvTargettop = $(this).offset().top;
		var lvScrolltop = $(window).scrollTop();
		var lvAttrClass = $(this).attr('class');
		var lvWindowheight = $(window).height();
		if (lvScrolltop > lvTargettop - lvWindowheight + 100) {
			$(this).addClass(config.itemTransit.addclass);
		};
		if (lvAttrClass.indexOf(config.itemTransit.toggleclass) > 0 && lvScrolltop > lvTargettop + lvWindowheight - 100) {
			$(this).removeClass(config.itemTransit.addclass);
		};
	});
};

function ui_scroll(argTarget, argFlag = null) {
	var lvTargettop = $(argTarget).offset().top;
	btn_currentinfo(argTarget);
	if (config.gnaviInfo.breakpoint > $(window).width() && argFlag == config.gnaviInfo.flagStr) {
		gnavi_toggle();
		$(window).scrollTop(vd.gnaviScrolltop);
	};
	$('body,html').animate({ scrollTop: lvTargettop }, 500);
};

function btn_currentinfo(argTarget) {
	$(config.currentInfo.target).find(`.${config.currentInfo.toggleclass}`).removeClass(config.currentInfo.toggleclass);
	$(config.currentInfo.target).find(`[href="${argTarget}"]`).attr('class', config.currentInfo.toggleclass);
};

function gnavi_toggle() {
	var lvTargetclass = $(config.gnaviInfo.target).attr('class');
	if (lvTargetclass.indexOf(config.gnaviInfo.toggleclass) > 0) {
		$(config.gnaviInfo.target).removeClass(config.gnaviInfo.toggleclass);
		$('body').removeAttr(config.dataAttr.attr1);
		$(window).scrollTop(vd.gnaviScrolltop);
	} else {
		$(config.gnaviInfo.target).addClass(config.gnaviInfo.toggleclass);
		vd.gnaviScrolltop = $(window).scrollTop();
		$('body').attr(config.dataAttr.attr1, config.dataAttr.val3);
	};
};

function gnavi_sink() {
	$(config.gnaviInfo.target).addClass(config.gnaviInfo.sinkToggleclass);
	setTimeout(function () {
		if ($(config.gnaviInfo.sinkPlace).outerHeight() - 100 < $(window).scrollTop()) {
			setTimeout(function () {
				$(config.gnaviInfo.target).removeClass(config.gnaviInfo.sinkToggleclass);
				clearTimeout();
			}, 100);
		} else {
			$(config.gnaviInfo.target).addClass(config.gnaviInfo.sinkToggleclass);
		};
	}, 100);
	window_loading.wloadingFlag2 = true;
};

function height_match() {
	$(config.heightMatch.target).outerHeight($(window).height());
	window_loading.wloadingFlag1 = true;
};