require.config({
    paths: {
        'underscore': '3libs/underscore',
        'zepto': '3libs/zepto',
        'backbone': '3libs/backbone',
        'LocalStorage': '3libs/localstorage',
        'jquery': '3libs/jquery-3.2.1',

        // Model
        'Employee': 'model/employee',
        // View
        'EmployeeView': 'view/employeeview',
        'App': 'view/appview',
        // Collection
        'EmployeeList': 'collection/employeelist',
        // template
        'tlp': 'template/tr.html',
    },
    // 无论在哪里用requirejs引入backbone后，就会多了Backbone和$这两个全局变量，所以后续再使用backbone就不需要拘束于requirejs的AMD写法了
    // shim 为那些没有使用define() 来声明依赖关系、设置模块的“浏览器全局变量注入”型脚本做依赖和导出配置
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
                exports: '$'
        },
        'zepto': {
                exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    },
});

// require(['_', 'zepto', 'Backbone', 'Employee', 'EmployeeView', 'EmployeeList', 'LocalStorage'],
// function (_, $, Backbone, Employee, EmployeeView, EmployeeList, LocalStorage) {
require(['underscore', 'backbone', 'App'],
function (App) {
    debugger;
    App();
    // var Employee = Backbone.Model.extend({
    //     validate: function (attrs, options) {
    //         debugger;
    //         for (var key in attrs) {
    //             if (attrs[key] === '') {
    //                 return key + '不能为空';
    //             }
    //
    //             if (key === 'age' && isNaN(attr.age)) {
    //                 return '年龄必须为数字';
    //             }
    //         }
    //     }
    // });
    // debugger;
    // var model = new Employee();

    console.log($('#box').html());
});
