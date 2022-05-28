class Employee {
    constructor(name, salary, title, boss) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = boss;
        if (this.manager != undefined) {
            this.manager.addEmployee(this);
        } else {
            this.manager = null;
        }
    }
}

module.exports = Employee;