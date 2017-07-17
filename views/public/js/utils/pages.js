define(function () {
    var page = function (infoArr, page) {
        var page = page || 10,
            result = [];
        if (infoArr) {
            for (var i = 0; i < Math.ceil(infoArr.length / page); i++) {
                var start = i * page,
                    end = start + page;
                result.push(infoArr.slice(start, end));
            }
            sessionStorage.setItem('PAGESINFO', JSON.stringify(result));
        }
        return {
            result: JSON.parse(sessionStorage.getItem("PAGESINFO"))
        }
    }
    return page
})