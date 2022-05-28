const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, boss) {
        super(name, salary, title, boss);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}

module.exports = Manager;