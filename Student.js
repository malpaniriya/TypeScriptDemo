var Student = /** @class */ (function () {
    function Student(rollno, name, sub1, sub2, sub3) {
        this.rollno = rollno;
        this.name = name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
    }
    Student.prototype.CalculateMarks = function () {
        this.TotalMarks = this.sub1 + this.sub2 + this.sub3;
    };
    Student.prototype.CalculatePercentage = function () {
        this.percentage = (this.TotalMarks / 300) * 100;
    };
    Student.prototype.Display = function () {
        console.log(this.percentage);
    };
    return Student;
}());
var s1 = new Student(15, "Riya", 55, 60, 75);
s1.CalculateMarks();
s1.CalculatePercentage();
s1.Display();
