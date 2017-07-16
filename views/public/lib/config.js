require.config({
    baseUrl: '/views/public',
    paths: {
        'jquery': 'assets/jquery/jquery.min',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'form': 'assets/jquery-form/jquery.form',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'nprogress': 'assets/nprogress/nprogress',
        'template': 'assets/artTemplate/template',
        'echarts': 'assets/echarts/echarts.min',
        'common': 'js/dashboard/common',
        'datepicker': 'assets/bootstrap-datepicker/js/bootstrap-datepicker',
        'datepickerzh': 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        'ckeditor': 'assets/ckeditor/ckeditor',
        'uploadify': 'assets/uploadify/jquery.uploadify',
        'region': 'assets/jquery-region/jquery.region',
        'utils': 'js/utils/utils',
        'pages': 'js/utils/pages'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'form': {
            deps: ['jquery']
        },
        'datepickerzh': {
            deps: ['jquery']
        },
        'uploadify': {
            deps: ['jquery']
        },
        'ckeditor': {
            exports: 'CKEDITOR'
        }
    }
});