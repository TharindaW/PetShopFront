import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {


  @Input() cartItem: CartItem;
  constructor() { }

  ngOnInit(): void {
    console.log( this.cartItem );
  }

}
