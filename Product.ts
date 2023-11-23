class Product
{
    code:number;
    name:string;
    price:any;
    disAmount:any;

    constructor(code,name,price)
    {
        this.code=code;
        this.name=name;
        this.price=price;
    }
    DiscountedPrice()
    {
      this.disAmount=(this.price*10)/100;  
    }
    Display()
    {
        console.log(this.disAmount);
    }
}
const p=new Product(111,"AC",50000);
p.DiscountedPrice();
p.Display();
