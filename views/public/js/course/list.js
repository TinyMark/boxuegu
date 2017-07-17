define(['jquery', 'template', 'pages'], function ($, template, pages) {
    $.ajax({
        url: '/api/course',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var data = pages(info.result);
                data.page = 0;
                var htmlStr = template('cs_list', data);
                $('.course-list').html(htmlStr);
                // location.href = '?page=' + (data.page + 1)
            }
        }
    });
    $(".course-list").on('click', '.pagination a', function () {
        var data = pages();
        data.page = $(this).attr('data-index');
        console.log(data.page);
        var htmlStr = template('cs_list', data);
        $('.course-list').html(htmlStr);
        window.scrollY = 0;
        // return false;
    })
})