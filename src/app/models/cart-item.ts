import { Product } from './product';

export class CartItem {

    product: Product;
    //productId: number;
    //name: string;
    //description: string;
    //rare: boolean;
    qty: number;
    price: number;
    //img: string;

    // { id: product.productId, qty: 1, name: product.name, price: priceResult.price 

    // id: number, name: string, description: string, rare: boolean, units: number, price: number, imageURl: string) 
    constructor(prod: Product, price: number , qty: number) {

        this.product = prod;
        // this.productId = id;
        // this.name = name;
        // this.description = description;
        // this.rare = rare;
        // this.unitPerCarton = units;
        this.price = price;
        this.qty = qty;
        // this.imageURl = imageURl;
    }

    public setPrice(price: number) { this.price = price; }
}
