var window_loading = new Vue({
    el: config.windowLoading.field,
    data: {
        wloadingString: config.windowLoading.string + figure['loading1'](),
        wloadingFlag1: false,
        wloadingFlag2: false,
    },
    methods: {
        then: function () {
            let lvInterval = setInterval(function () {
                if (window_loading.wloadingFlag1 && window_loading.wloadingFlag2) {
                    $('body').removeAttr(config.dataAttr.attr1);
                    $(config.figure.loading1).css({ 'animation-play-state': 'paused' });
                    $(config.windowLoading.field).fadeOut(500, () => {
                        $(config.windowLoading.field).remove();
                        $(config.windowLoading.svg).addClass(config.windowLoading.addclass);
                        clearInterval(lvInterval);
                        get_json.gJsonAddclass = (!get_json.gJsonFlags ? config.fileAlert.addclass : null);
                    });
                };
            }, 1000);
        }
    }
});

var get_json = new Vue({
    data: function () {
        return {
            dataContents: [],
            dataProfile: [],
            dataLanguage: [],
            gJsonFlags: false,
            gJsonFlag1: false,
            gJsonFlag2: false,
            gJsonFlag3: false,
            gJsonAddclass: null
        };
    },
    methods: {
        get_contents: function () {
            axios.get(config.file.json1)
                .then(response => {
                    this.dataContents = response.data;
                    this.gJsonFlag1 = true;
                    for (var i in this.dataContents) {
                        var lvCategory = this.dataContents[i].label;
                        (items_more.countFinish[lvCategory] ? null : items_more.countFinish[lvCategory] = this.dataContents[i].loadCount);
                    };
                    this.gJsonFlags = this.gJsonFlag1 && this.gJsonFlag2 && this.gJsonFlag3;
                })
        },
        get_profile: function () {
            axios.get(config.file.json2)
                .then(response => {
                    this.dataProfile = response.data;
                    this.gJsonFlag2 = true;
                    this.gJsonFlags = this.gJsonFlag1 && this.gJsonFlag2 && this.gJsonFlag3;
                })
        },
        get_language: function () {
            axios.get(config.file.json3)
                .then(response => {
                    this.dataLanguage = response.data;
                    this.gJsonFlag3 = true;
                    this.gJsonFlags = this.gJsonFlag1 && this.gJsonFlag2 && this.gJsonFlag3;
                })
        },
    }
});

var ui_build = new Vue({
    el: config.field.main,
    mounted: function () {
        get_json.get_contents();
        get_json.get_profile();
        get_json.get_language();
    },
});

var items_more = new Vue({
    data: {
        countFinish: {},
        countImages: 0,
        categoryImages: [],
    },
    methods: {
        countup: function () {
            ++this.countImages;
        },
        then: function (argCategory, argCategoryIndex) {
            var lvPlaceInsert = `[${config.dataAttr.attr2}="${argCategory}"]`;
            var lvPlaceLoading = `${lvPlaceInsert} + ${config.itemsMore.place}`;
            $(lvPlaceLoading).find(config.itemsMore.btn).addClass(config.itemsMore.toggleclass);
            $(lvPlaceLoading).append(figure['loading2']);

            var lvCountClick = get_json.dataContents[argCategoryIndex].clickCount;
            var lvCountEnd = get_json.dataContents[argCategoryIndex].items.length;
            var lvCountPrev = items_more.countFinish[argCategory];

            var lvCountJudge = lvCountPrev + lvCountClick > lvCountEnd;
            var lvCountNext = (lvCountJudge ? lvCountEnd : lvCountPrev + lvCountClick);

            items_more.$set(items_more.countFinish, argCategory, lvCountNext);
            items_more.countFinish = Object.assign({}, items_more.countFinish, { argCategory });

            for (var i = 0, n = lvCountPrev; n < lvCountNext; i++ , n++) {
                items_more.categoryImages[i] = new Image();
                var lvImageSrc = get_json.dataContents[argCategoryIndex].items[n].image;
                if (!lvImageSrc) {
                    items_more.countup();
                } else {
                    items_more.categoryImages[i].src = lvImageSrc;
                    items_more.categoryImages[i].onload = function () {
                        items_more.countup();
                    };
                };
            };

            let lvInterval = setInterval(function () {
                if (items_more.countImages == lvCountClick || lvCountJudge) {
                    $(config.figure.loading2).css({ 'animation-play-state': 'paused' }).fadeOut(500, () => { $(this).remove(); });
                    $(lvPlaceLoading).find(config.itemsMore.btn).removeClass(config.itemsMore.toggleclass);
                    clearInterval(lvInterval);
                    items_more.countImages = 0;
                    $(lvPlaceInsert).children().addClass(config.itemTransit.addclass);
                };
            }, 300);
        },
    },
});

var contents_appear = new Vue({
    el: config.field.sub,
    data: {
        cAppearCode: null,
        cAppearScrolltop: null,
        cAppearOverlayShow: false,
        cAppearOverlayBtnShow: true,
    },
    methods: {
        common: function () {
            this.cAppearCode = '';
            this.cAppearScrolltop = $(window).scrollTop();
            this.cAppearOverlayShow = true;
            $('body').attr(config.dataAttr.attr1, config.dataAttr.val1);
            setTimeout(function () {
                $('body').attr(config.dataAttr.attr1, config.dataAttr.val2);
                clearTimeout();
            }, 200);
        },
        item_detail: function (number, index) {
            this.common();
            this.cAppearCode += `<table class="product">`;
            var lvTarget = get_json.dataContents[number].items[index];
            for (var lvString in lvTarget) {
                if (lvTarget[lvString] && lvString != "image" && lvString != "type") {
                    this.cAppearCode += `<tr><th>${get_json.dataLanguage['jpn'][lvString]}</th><td>`;
                    this.cAppearCode += (lvString == "url" ? `<a href="${lvTarget[lvString]}" target="_blank">${lvTarget[lvString]}</a>` : lvTarget[lvString]);
                    this.cAppearCode += `</td></tr>`;
                };
            };
            this.cAppearCode += `</table>`;
        },
        profile_more: function () {
            this.common();
            this.cAppearCode += `<table class="profile">`;
            for (let i in get_json.dataProfile) {
                var lvTarget = get_json.dataProfile[i];
                if (lvTarget.label != "basic" && lvTarget.label != "outside") {
                    this.cAppearCode += `<tr><th>${lvTarget.title}</th><td><dl>`;
                    for (let n in lvTarget.items) {
                        this.cAppearCode += `<dt>${lvTarget.items[n].title}`;
                        this.cAppearCode += (lvTarget.label != "qualification" ? `：</dt><dd>${lvTarget.items[n].period}` : `</dt><dd>（${lvTarget.items[n].period}）`);
                        this.cAppearCode += `</dd>`;
                    };
                    this.cAppearCode += `</dl></td></tr>`;
                };
            };
            this.cAppearCode += `</table>`;
        },
        object_preview: function (argCategoryIndex, argItemIndex) {
            this.common();
            var lvObject = get_json.dataContents[argCategoryIndex].items[argItemIndex];
            this.cAppearOverlayBtnShow = false;
            switch (lvObject.type) {
                case 'video':
                    this.cAppearCode += `<video class="overlay_detail_video" controls muted autoplay playsinline width="640" height="360" `;
                    this.cAppearCode += `poster="${lvObject.image}" preload="none">`;
                    this.cAppearCode += `<source src="${lvObject.url}">`;
                    this.cAppearCode += `<p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>`;
                    this.cAppearCode += `</video>`;
                    break;
                case 'image':
                    this.cAppearCode += `<img src="${lvObject.image}" alt="${lvObject.title}">`;
                    break;
            };
            /*
            this.cAppearCode += figure.loading1();
            $(".overlay_detail_video").addEventListener('canplay', function () {
                alert();
                setTimeout(function () {
                    $(config.figure.loading1).css({ 'animation-play-state': 'paused' }).fadeOut(300, function () {
                        $(this).remove();
                    });
                    clearTimeout();
                }, 1000);
            });
            */
        },
        overlay_close: function () {
            this.cAppearOverlayShow = false;
            $('body').removeAttr(config.dataAttr.attr1);
            $(window).scrollTop(this.cAppearScrolltop);
            this.cAppearOverlayBtnShow = true;
        }
    },
});