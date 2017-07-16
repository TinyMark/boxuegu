define(['jquery', 'template', 'pages'], function ($, template, pages) {
    console.log(pages)
    $.ajax({
        url: '/api/course',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var data = pages(1, info.result);
                console.log(data);
                var htmlStr = template('cs_list', data);
                $('.course-list').html(htmlStr);
            }
        }
    })
})