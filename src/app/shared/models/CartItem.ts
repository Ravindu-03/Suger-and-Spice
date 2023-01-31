import { product } from "./fproducts";


export class cartitem{
    constructor(public Product:product){}

    quantity:number = 1 ;
    price:number = this.Product.price;

}