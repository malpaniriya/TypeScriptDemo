var Product = /** @class */ (function () {
    function Product(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
    Product.prototype.DiscountedPrice = function () {
        this.disAmount = (this.price * 10) / 100;
    };
    Product.prototype.Display = function () {
        console.log(this.disAmount);
    };
    return Product;
}());
var p = new Product(111, "AC", 50000);
p.DiscountedPrice();
p.Display();
