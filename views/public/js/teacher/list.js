define(['jquery', 'template', 'bootstrap'], function ($, template, bootstrap) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (data) {
            // console.log(data);
            if (data.code == 200) {
                // 用模板来渲染数据
                var htmlStr = template('tc_list_tpl', data);
                $("#tc_list_tBody").html(htmlStr);
            }
        }
    })
    // 添加功能
    $('.btn-add').on('click', function (e) {
        e.preventDefault();
        location.href = 'add'
        return false;
    })


    // 查看功能
    $('#tc_list_tBody').on('click', 'a.check-info', function () {
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url: '/api/teacher/view',
            type: 'get',
            data: { tc_id: id },
            success: function (info) {
                console.log(info);
                if (info.code == 200) {
                    //要渲染模板
                    var htmlStr = template('tc_info_tpl', info.result);
                    $('#teacherModal tbody').html(htmlStr);
                    $('#teacherModal').modal();  //让模态框弹出来
                }
            }
        })
    })

    // // 编辑功能
    // $('#tc_list_tBody').on('click', 'a.edit-info', function () {
    //     var id = $(this).parent().attr('data-id');

    //     $.ajax({
    //         url: '/api/teacher/edit',
    //         type: 'get',
    //         data: { tc_id: id },
    //         success: function (info) {
    //             if (info.code == 200) {
    //                 //要渲染模板
    //                 var htmlStr = template('tc_info_tpl', info.result);
    //                 $('#teacherModal tbody').html(htmlStr);
    //                 $('#teacherModal').modal();  //让模态框弹出来
    //             }
    //         }
    //     })
    // })
})