import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  subject = new Subject();

  constructor() { }

  sendData(product: Product) {
    console.log(product);
    this.subject.next(product);
  }

  recieveData() {
    return this.subject.asObservable();
  }
}
