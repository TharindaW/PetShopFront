import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  subjectProd = new Subject();

  constructor() { }

  sendData(cart: CartItem) {
    console.log(cart);
    this.subjectProd.next(cart);
  }

  recieveData() {
    return this.subjectProd.asObservable();
  }
}
