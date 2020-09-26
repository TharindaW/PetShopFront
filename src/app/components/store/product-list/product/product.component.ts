import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';

import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  qty = 1;

  constructor(private dataService: CartDataService) { }

  ngOnInit(): void {
  }

  addToCartCarton() {
    console.log('here' + this.qty);
    const cartItem: CartItem = new CartItem(this.product, this.qty , 0 );

    this.dataService.sendData(cartItem);
  }

  addToCartUnit() {
    console.log('here' + this.qty);
    const cartItem: CartItem = new CartItem(this.product, 0 , this.qty );
    this.dataService.sendData(cartItem);
  }

}
