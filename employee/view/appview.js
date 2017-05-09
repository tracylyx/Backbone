define(['backbone', 'underscore', 'EmployeeList'], function (EmployeeList) {
    var App = Backbone.View.extend({
        el: $('#box'),
        events: {
            // 'click .add': 'addOne',
            'click .edit': 'editInfo',
            'click .delete': 'deleteInfo'
        },
        initialize: function () {
            // callback 总是在 EmployeeList 上下文环境中
            this.listenTo(EmployeeList, 'add', this.addOne);
        },
        // 新增员工信息
        addOne: function () {
            alert('add');
        },
        // 编辑员工信息
        editInfo: function () {

        },
        // 删除员工信息
        deleteInfo: function () {

        },
    });

    // 创建应用入口实例
    var instance = new App();

    return instance;
});
