define(['jquery', 'cookie'], function ($, cookie) {
    $('.tc_add').on('click', function () {
        console.log($('.form-horizontal'));
        var formData = $('.form-horizontal').serializeArray();
        console.log(formData);
    })
})