/**
 * 
 * hackathon.js
 */

console.log("hello hackathon");


class Product {

    #productId = 0;
    #name = "";
    #quantityInStock = 0;
    #unitPrice = 0;
 
    constructor(productId,name, quantityInStock, unitPrice){
        this.productId = productId;
        this.name = name;
        this.quantityInStock = quantityInStock;
        this.unitPrice = unitPrice;
    
    }

    getProductId(){
        return this.productId;
    }

    getName (){
        return this.name;
    }

    getQuantityInStock(){
        return this.quantityInStock;
    }
    getUnitPrice(){
        return this.unitPrice;
    }


    setProductId(value){
        this.name = value;
    }
    setName(value){
        this.name = value;
    }

    setQuantityInStock(value){
        this.quantityInStock = value;
    }
    
    setUnitPrice(value){
        this.unitPrice = value;
    }

    toString(){
        let formattedOutPut = this.productId + "," +
        this.name + "," +this.quantityInStock + "," + this.unitPrice;
        return formattedOutPut;
    }

}

const products = new Array(
    new Product(1001, "Banana", 12, 0.99),
    new Product(1002, "Apple", 64, 1.85),
    new Product(1001,"Carrots", 125, 2.75)
);

for(const product of products){
    console.log(product.toString());
}