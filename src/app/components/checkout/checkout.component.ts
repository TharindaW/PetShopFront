import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';
import { CartItem } from 'src/app/models/cart-item';

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
    
    this.dataService.recieveDataCheckout().subscribe((items: CartItem[] ) => {
      // this.cartItems = items;
      console.log('Cart Item recieved to checkout : ' + items);
      console.log(this.cartItems);
    },
    (error) => {
      console.log('error', error);
    },
    () => {
      console.log('completed');
    });
  }

}
