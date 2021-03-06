define(['jquery', 'form'], function ($, form) {
    //将当前添加的课程名称内容，提交给服务器的数据库
    $('#btnCreate').on('click', function () {
        $('form').ajaxSubmit({
            url: '/api/course/create',
            type: 'post',
            success: function (info) {
                if (info.code == 200) {
                    alert('提交成功');
                    location.href = '/course/basic?cs_id=' + info.result.cs_id;
                }
            }
        })
        return false; //阻止默认的刷新 行为
    })
})