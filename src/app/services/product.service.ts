import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';


const URL = 'http://localhost:8080/products';
const URL_MOCK = 'https://1be9e083-8bde-4239-9855-e2564fa39115.mock.pstmn.io/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, '1Hourseshoe', 825, 5),
  //   new Product(2, '2Penguin-ears', 175, 20),
  //   new Product(3, '3Hourseshoe', 825, 5),
  //   new Product(4, '4Hourseshoe', 825, 5),
  //   new Product(5, '5Penguin-ears', 175, 20)
  // ];



  constructor(private http: HttpClient) { }


getProducts(): Observable < Product[] > {
  return this.http.get<Product[]>(URL_MOCK);
}
}
