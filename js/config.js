var config = {
    file: {
        json1: 'https://raw.githubusercontent.com/kenji88s/portfolio_2/main/json/contents.json',
        json2: 'https://raw.githubusercontent.com/kenji88s/portfolio_2/main/json/profile.json',
        json3: 'https://raw.githubusercontent.com/kenji88s/portfolio_2/main/json/language.json',
    },
    fileAlert: {
        string: 'ファイルが存在しない<span>もしくは接続不可です</span>',
        addclass: 'active',
    },
    field: {
        main: '#ui',
        sub: '#detailField',
    },
    dataAttr: {
        attr1: 'data-state',
        attr2: 'data-insert',
        val1: 'no-bar',
        val2: 'detail',
        val3: 'gnavi',
    },
    figure: {
        loading1: '.building_square',
        loading2: '.half_circles',
    },
    windowLoading: {
        field: '#loadingField',
        svg: '#textTitleContainer',
        string: '<div class="loading_area_text"><p>Now Loading</p></div>',
        addclass: 'active',
    },
    itemsMore: {
        place: '.contents_section_loading',
        btn: '.more_btn',
        toggleclass: 'disable',
    },
    bgEffect: {
        point: '.current-point',
        pointAttr: 'id',
        target: '#particles',
        targetAttr: 'data-current',
    },
    itemTransit: {
        target: '.transit-item',
        addclass: 'effected',
        toggleclass: 'toggle',
    },
    currentInfo: {
        target: '.current-info',
        toggleclass: 'active',
    },
    gnaviInfo: {
        target: '#gnavi',
        breakpoint: 896,
        toggleclass: 'opened',
        flagStr: 'gnavi',
        sinkPlace: '.header',
        sinkToggleclass: 'sink',
    },
    heightMatch: {
        target: '.header, #loadingField'
    },
    svgChange: {
        breakpoint: 880
    },
};

var vd = new Vue({
	data: {
        svgSource: null,
        gnaviScrolltop: null
    },
});