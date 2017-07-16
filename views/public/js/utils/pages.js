define(function () {
    var page = function (pages, infoArr, page) {
        var pages = pages - 1 || 0,
            page = page || 10,
            result = [];
        // infoArr = infoArr || sessionStorage.getItem("PAGESINFO");
        if (infoArr) {
            for (var i = 0; i < Math.ceil(infoArr.length / page); i++) {
                var start = i * page,
                    end = start + page;
                result.push(infoArr.slice(start, end));
            }
            sessionStorage.setItem('PAGESINFO', result);
        }
        console.log(sessionStorage.getItem("PAGESINFO"));
        return sessionStorage.getItem("PAGESINFO")[pages];
    }
    return page
})