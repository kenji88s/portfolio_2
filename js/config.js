var config = {
    file: {
        json1: 'https://gist.githubusercontent.com/kenji88s/866fcadb7e9aa5df8e0324e26f84cffa/raw/0a49a8661361bb249afc6f7567baa6609537527b/contents.json',
        json2: 'https://gist.githubusercontent.com/kenji88s/866fcadb7e9aa5df8e0324e26f84cffa/raw/0a49a8661361bb249afc6f7567baa6609537527b/profile.json',
        json3: 'https://gist.githubusercontent.com/kenji88s/866fcadb7e9aa5df8e0324e26f84cffa/raw/0a49a8661361bb249afc6f7567baa6609537527b/language.json',
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