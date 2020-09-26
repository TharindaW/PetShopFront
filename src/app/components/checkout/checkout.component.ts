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

    // this.dataService.recieveDataCheckout().subscribe((items: CartItem[] ) => {
    //   // this.cartItems = items;
    //   console.log('Cart Item recieved to checkout : ' + items);
    //   console.log(this.cartItems);
    // },
    // (error) => {
    //   console.log('error', error);
    // },
    // () => {
    //   console.log('completed');
    // });

    this.dataService.recieveDataCheckout().subscribe((items: CartItem[]) =>  this.cartItems = items );

    console.log('Checlout');
    console.log(this.cartItems);
    
    let product1 = new Product( 1 , 'Penguin-ears' , '' , false ,20 , 825, 'https://i.pinimg.com/originals/f2/99/69/f299690d8b53f5e038eb3d18ffdf3e7d.jpg');
    let product2 = new Product( 2 , 'Horseshoe' , '' , false ,5 , 175, 'https://cdn.shopify.com/s/files/1/0727/7135/products/HorseshoeBuckingBronco_1200x630.jpg');

    this.cartItems = [ new CartItem( product1  , 500 , 3) , new CartItem( product2  , 600 , 4)];
  }

}
