import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {PriceResult} from '../models/price-result';
import { CartItem } from '../models/cart-item';

const BASE_URL = 'http://localhost:8080/calculate'; // ?productForm=CARTON&qty=3&productId=1';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }


  calculatePrice(cartItem: CartItem ): Observable<PriceResult> {
    const urlString = BASE_URL + '?carton=' + cartItem.carton + '&unit=' + cartItem.unit + '&productId=' + cartItem.product.productId;
    console.log(urlString);
    return this.http.get<PriceResult>(urlString);
  }
}
