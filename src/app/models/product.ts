export class Product {
    productId: number;
    name: string;
    description: string;
    rare: boolean;
    unitPerCarton: number;
    cartonPrice: number;
    imageUrl: string;

    constructor(id: number, name: string, price: number, units: number) {
        this.productId = id;
        this.name = name;
        this.cartonPrice = price;
        this.unitPerCarton = units;
    }
}
