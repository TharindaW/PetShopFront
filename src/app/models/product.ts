export class Product {
    productId: number;
    name: string;
    description: string;
    rare: boolean;
    unitPerCarton: number;
    cartonPrice: number;
    img: string;

    constructor(id: number, name: string, description: string, rare: boolean, units: number, price: number, imageURl: string) {
        this.productId = id;
        this.name = name;
        this.description = description;
        this.rare = rare;
        this.unitPerCarton = units;
        this.cartonPrice = price;
        this.img = imageURl;
    }
}
