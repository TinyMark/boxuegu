define(['jquery', 'utils', 'template', 'uploadify'], function ($, utils, template, uploadify) {
    var cs_id = utils.queryString().cs_id;
    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: { cs_id: cs_id },
        success: function (data) {
            if (data.code == 200) {
                // alert('成功了...');
                // 把图片渲染一下
                var htmlStr = template('cs_pic_tpl', data.result);
                $('.steps').html(htmlStr);
                //单击按钮的时候，图片是可以选择后被上传的，这是原图，并能够显示出来
                $("#upload").uploadify({
                    swf: '/views/public/assets/uploadify/uploadify.swf',
                    uploader: '/api/uploader/cover',
                    width: 85,
                    height: 'auto',
                    buttonText: '请选择图片',
                    formData: { cs_id: cs_id },
                    fileObjName: 'cs_cover_original',
                    buttonClass: 'btn btn-success btn-sm',
                    itemTemplate: '<span></span>',
                    onUploadSuccess: function (file, data, response) {
                        console.log(data);// 如果图片上传成功的话，要将图片显示出来
                        $(".preview img").attr('src', JSON.parse(data).result.path);
                        $('#cropBtn').prop('disabled', false);// selected  checked  disabled 这三个比较特殊，不能用attr，只能用prop
                    }
                });
            }
        }
    });//ajax


})