import { Product } from './product';

export class CartItem {

    product: Product;

    carton: number;
    unit: number;

    price: number;

    constructor(prod: Product, carton: number, unit: number) {

        this.product = prod;
        this.carton = carton;
        this.unit = unit;
    }

    setPrice(price: number) {

        this.price = price;
    }
}
