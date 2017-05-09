define(['backbone', 'Employee', 'LocalStorage'],
function (Employee, LocalStorage) {
    var EmployeeList = Backbone.Collection.extend({
        model: Employee,
        // 将数据保存至本地
        localStorage: new LocalStorage('employees'),
    });

    var instance = new EmployeeList();

    return instance;
});
