import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutDataService {

  subjectCart = new  BehaviorSubject<CartItem[]>([]);

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
