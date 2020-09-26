import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutDataService {

  subjectCart = new Subject();

  constructor() { }


  sendDataToCheckout(items: CartItem[]) {
    console.log('service');
    console.log(items);
    this.subjectCart.next(items);
  }

  recieveDataCheckout() {
    console.log('recieveDataCheckout');
    return this.subjectCart.asObservable();
  }
}
