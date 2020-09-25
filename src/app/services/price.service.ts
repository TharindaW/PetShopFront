import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {PriceResult} from '../models/price-result';

const BASE_URL = 'http://localhost:8080/calculate'; // ?productForm=CARTON&qty=3&productId=1';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }


  calculatePrice(form: string , qty: number , productId: number): Observable<PriceResult> {
    const urlString = BASE_URL + '?productForm=' + form + '&qty=' + qty + '&productId=' + productId;
    console.log(urlString);
    return this.http.get<PriceResult>(urlString);
  }
}
