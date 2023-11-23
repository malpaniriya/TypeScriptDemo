class Student
{
    rollno:number;
    name:string;
    marks:any;
    percentage:any;
    TotalMarks:any;
    sub1:string;
    sub2:string;
    sub3:String

    constructor(rollno,name,sub1,sub2,sub3)
    {
        this.rollno=rollno;
        this.name=name;
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
        
    }
    CalculateMarks()
    {
        this.TotalMarks=this.sub1+this.sub2+this.sub3;
    }
    CalculatePercentage()
    {
        this.percentage=(this.TotalMarks/300)*100
    }
    Display()
    {
        console.log(this.percentage);
    }

}
const s1=new Student(15,"Riya",55,60,75);
s1.CalculateMarks();
s1.CalculatePercentage();
s1.Display();

