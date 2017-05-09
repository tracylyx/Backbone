define(['backbone', 'underscore'], function () {
    var EmployeeView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template($('#tr-tpl').html()),
        events: {

        },
        initialize: function() {
            this.model.bind(this.model, 'change', this.render);
            // remove() View上的方法，移除DOM的同时会将此DOM上的事件监听一并移除
            this.model.bind(this.model, 'destroy', this.remove);
        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON())); // 给模板传入数据
            return this;
        },

    });

    return new EmployeeView();
});
