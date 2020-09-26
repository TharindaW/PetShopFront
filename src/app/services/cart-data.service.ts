import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  subjectProd = new Subject();

  constructor() { }

  sendData(product: Product) {
    console.log(product);
    this.subjectProd.next(product);
  }

  recieveData() {
    return this.subjectProd.asObservable();
  }
}
