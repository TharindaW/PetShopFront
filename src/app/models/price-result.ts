export class PriceResult {

    price: number;
    cartons: number;
    units: number;
    resultDetails: string;

    constructor(price: number, cartons: number, units: number, resultDetails: string) {
        this.price = price;
        this.cartons = cartons;
        this.units = units;
        this.resultDetails = resultDetails;
    }
}
