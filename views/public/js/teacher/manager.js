define(['jquery', 'cookie', 'template', 'form', 'datepicker', 'datepickerzh'], function ($, cookie, template, form, datepicker, datepickerzh) {
    var search = location.search;//  ?tc_id=14&name=zhangsan&age=20
    search = search.slice(1); //第一个参数是从哪里开始截取，第二个参数是截取到哪里，如果不写默认是截取到最后
    // console.log(search);
    var searchArr = search.split('&');  //searchArr是一个数组
    // console.log(searchArr);
    var obj = {};  //定义一个空对象 ，用来存储数据
    for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split('='); //temp也是一个数组
        // console.log(temp);
        obj[temp[0]] = temp[1];
    }
    var id = obj.tc_id;
    if (id) {
        $.ajax({
            url: '/api/teacher/edit',
            type: 'get',
            data: {
                tc_id: id
            },
            success: function (info) {
                console.log(info);
                info.result.title = '讲师编辑';
                info.result.saveBtnText = '保存';
                if (info.code == 200) {
                    var htmlStr = template('tc_manager', info.result);
                    $('.teacher').html(htmlStr);
                    //页面渲染完毕之后，再来渲染插件
                    $('input[name=tc_join_date]').datepicker({
                        format: 'yyyy/mm/dd',      //让日期插件的格式 变成年月日的方式
                        language: 'zh-CN'
                    });
                }
            }
        })
    } else {
        var info = {
            title: '讲师添加',
            saveBtnText: '添加',
            tc_gender: 0
        };
        var htmlStr = template('tc_manager', info);
        $('.teacher').html(htmlStr);
        $('input[name=tc_join_date]').datepicker({
            format: 'yyyy/mm/dd',
            language: 'zh-CN'
        });
    }

    $('.teacher').on('click', '.btnSave', function () {
        $('form').ajaxSubmit({
            url: id ? '/api/teacher/update' : '/api/teacher/add',
            type: 'post',
            success: function (info) {
                if (info.code == 200) {
                    location.href = '/teacher/list';
                }
            }
        });
        return false;
    })
})