import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, '1Hourseshoe', 825, 5),
    new Product(2, '2Penguin-ears', 175, 20),
    new Product(3, '3Hourseshoe', 825, 5),
    new Product(4, '4Hourseshoe', 825, 5),
    new Product(5, '5Penguin-ears', 175, 20)
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
