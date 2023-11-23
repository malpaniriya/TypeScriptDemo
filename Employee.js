var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.calcuate = function () {
        this.hra = this.salary * 0.50;
        this.da = this.salary * 0.30;
        this.ta = this.salary * 0.20;
        this.pf = this.salary * 0.13;
        this.gross = (this.salary + this.hra + this.ta + this.da) - this.pf;
    };
    Employee.prototype.print = function () {
        console.log(this.gross);
    };
    return Employee;
}());
var e = new Employee(111, "Riya", 45000);
e.calcuate();
e.print();
