class Employee
{
    id:number;
    name:string;
    salary:any;
    hra:any;
    da:any;
    ta:any;
    pf:any;
    gross:any;

    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    calcuate()
    {
      this.hra=this.salary*0.50;
      this.da=this.salary*0.30;
      this.ta=this.salary*0.20;
      this.pf=this.salary*0.13;
      this.gross=(this.salary+this.hra+this.ta+this.da)-this.pf;
    }

    print()
    {
        console.log(this.gross);
    }
}

const e=new Employee(111,"Riya",45000);
e.calcuate();
e.print();