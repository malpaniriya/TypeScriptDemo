interface IStudent{
    rollno:Number;
    name:string;
}

class Student
{
    rollno:Number;
    name:string;
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }
}

const s:IStudent=new Student(1,"Riya");
console.log("roll no :"+s.rollno+" name :"+s.name);