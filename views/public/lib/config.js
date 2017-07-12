require.config({
    baseUrl: '/views/public',
    paths: {
        'jquery': 'assets/jquery/jquery.min',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'nprogress': 'assets/nprogress/nprogress',
        'template': 'assets/artTemplate/template',
        'echarts': 'assets/echarts/echarts.min',
        'common': 'js/dashboard/common'
    },
    shim: {   // 设置bootstrap的依赖
        'bootstrap': {
            deps: ['jquery']
        }
    }
});