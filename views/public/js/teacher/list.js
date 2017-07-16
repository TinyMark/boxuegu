define(['jquery', 'template', 'bootstrap'], function ($, template, bootstrap) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (info) {
            console.log(info);
            if (info.code == 200) {
                // 用模板来渲染数据
                var htmlStr = template('tc_list_tpl', info);
                $("#tc_list_tBody").html(htmlStr);
            }
        }
    })

    // 查看功能
    $('#tc_list_tBody').on('click', 'a.check-info', function () {
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url: '/api/teacher/view',
            type: 'get',
            data: { tc_id: id },
            success: function (info) {
                if (info.code == 200) {
                    //要渲染模板
                    var htmlStr = template('tc_info_tpl', info.result);
                    $('#teacherModal tbody').html(htmlStr);
                    $('#teacherModal').modal();  //让模态框弹出来
                }
            }
        })
        return false;
    })

    // 启用/注销
    $('#tc_list_tBody').on('click', 'a.tc_handle', function () {
        var _this = $(this),
            id = _this.parent().attr('data-id'),
            status = _this.attr('data-status');
        console.log(_this, id, status)
        $.ajax({
            url: '/api/teacher/handle',
            type: 'post',
            data: {
                tc_id: id,
                tc_status: status
            },
            success: function (info) {
                if (info.code == 200) {
                    _this.attr('data-status', info.result.tc_status).html(info.result.tc_status == 0 ? '注 销' : '启 用')
                }
            }
        })
        return false;
    })
})