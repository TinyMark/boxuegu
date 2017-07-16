define(['jquery', 'template', 'form', 'uploadify', 'datepicker', 'datepickerzh', 'region', 'ckeditor'], function ($, template, form, uploadify, datepicker, datepickerzh, region, ckeditor) {
    $.ajax({
        url: '/api/teacher/profile',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                console.log(info)
                var htmlStr = template('profile_tpl', info.result);
                $('.settings').html(htmlStr);

                // 2、图片上传插件的使用
                $('#upfile').uploadify({
                    swf: '/views/public/assets/uploadify/uploadify.swf',
                    uploader: '/api/uploader/avatar',
                    buttonText: '',
                    weight: 120,
                    height: 120,
                    fileObjName: 'tc_avatar',
                    onUploadSuccess: function (file, data, response) {
                        $("#avatar_preview").attr('src', JSON.parse(data).result.path);
                    }
                });

                // 3、日期
                $('input[name=tc_join_date],input[name=tc_birthday]').datepicker({
                    format: 'yyyy-mm-dd',
                    language: 'zh-CN'
                })

                // 4、省市区三级联动
                $('#region').region({
                    url: '/views/public/assets/jquery-region/region.json'
                })

                // 5、富文本编辑器
                ckeditor.replace('introduce', {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'links' },
                        { name: 'document', groups: ['mode', 'document', 'doctools'] },
                        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] }
                    ]
                });

            }
        }
    });
    $('.settings').on('click', '.saveBtn', function () {
        //先更新一下当前富文本编辑器的内容
        $("#introduce").val(CKEDITOR.instances.introduce.getData());
        $('form').ajaxSubmit({
            url: '/api/teacher/modify',
            type: 'post',
            success: function (info) {
                if (info.code == 200) {
                    alert('保存成功...正在跳转主页...');
                    // location.href = '/index';
                }
            }
        })
        return false;//阻止默认刷新行为
    })
})