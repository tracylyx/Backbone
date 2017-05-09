define(['backbone'], function () {
    // 姓名 年龄 职业 性别 学历
    var Employee = Backbone.Model.extend({
        // save | set 都会走属性验证
        /**
         * 属性校验，默认不检验
         * 当employee里面的数据每次发生改变的时候都会先调用这个validate方法
         * @param  {Object} attrs   set 或者 save 时的json数据
         * @param  {[type]} options [description]
         * @return {[type]}         [description]
         */
        validate: function (attrs, options) {
            debugger;
            for (var key in attrs) {
                if (attrs[key] === '') {
                    return key + '不能为空';
                }

                if (key === 'age' && isNaN(attr.age)) {
                    return '年龄必须为数字';
                }
            }
        }
    });

    var addInfo = function (oInfo) {
        var employee = new Employee();

        if (!oInfo) {
            oInfo = {};
        }

        employee.set(oInfo);
    };

    return Employee;
});
