import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  total = 0;
  constructor(private dataService: CheckoutDataService) { }

  ngOnInit(): void {
    console.log('ngOnInit ');

    let total = 0;

    this.dataService.recieveDataCheckout().subscribe((items: CartItem[]) => this.cartItems = items);

    console.log('Checlout');
    console.log(this.cartItems);

    this.cartItems.forEach(item => { this.total += item.price; });
  }

}
