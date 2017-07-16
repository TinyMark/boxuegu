define(['jquery', 'cookie', 'template'], function ($, cookie, template) {
    if (!$.cookie('PHPSESSID') && location.pathname != '/login') {   //如果自己当前就是login页面的话，就不需要再跳转了，只有不是login页面的时候，才需要跳转
        location.href = '/login';
    }

    // 渲染模板    login页面是不需要用户名和头像渲染的，需要排除掉
    if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login') {
        if ($.cookie('tcInfo')) {
            var tcInfo = JSON.parse($.cookie('tcInfo')); // 把字符串转换成对象
            var htmlStr = template('tp_aside_avatar', tcInfo);  // 拼接模板字符串
            $('.aside > .profile').html(htmlStr); //渲染模板
        } else {
            location.href = '/login';
        }
        //退出功能
        $('#logoutBtn').on('click', function () {
            $.ajax({
                url: '/api/logout',
                type: 'post',
                success: function (info) {
                    if (info.code == 200) {
                        alert('退出成功');
                        location.href = '/index';
                    }
                }
            })
        })

        // console.log($(".navs a+ul").prev()); //先测试一下，是否获取到了对象
        $(".navs a+ul").prev().on("click", function () {
            //上面是给和ul平级的a标签注册事件
            $(this).next().slideToggle();//通过当前对象，找到下一个元素，也就是ul，让它进行下拉菜单的切换
        })
    }
})


