import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';
import { CartItem } from 'src/app/models/cart-item';
import { PriceService } from 'src/app/services/price.service';
import { PriceResult } from 'src/app/models/price-result';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  total = 0;
  constructor(private dataService: CheckoutDataService , private priceService: PriceService ) { }

  ngOnInit(): void {
    console.log('ngOnInit ');

    let total = 0;

    this.dataService.recieveDataCheckout().subscribe((items: CartItem[]) => this.cartItems = items);

    console.log('Checlout');
    console.log(this.cartItems);

    this.cartItems.forEach(item => { this.total += item.price; });
  }

  somethingChanged(index: number){
    // this.cartItems.forEach(item => { console.log( 'Carton : ' + item.carton + ' Item : ' + item.unit ); });
    console.log( this.cartItems);
    console.log( index );

    this.priceService.calculatePrice(this.cartItems[index]).subscribe((price) => {
      console.log(price);


      this.cartItems[index].price = price.price;
      this.cartItems[index].priceDetails = price.resultDetails;
      this.cartItems[index].carton = price.cartons;
      this.cartItems[index].unit = price.units;
      this.cartItems[index].priceDetails = price.resultDetails;

      this.total = 0;
      this.cartItems.forEach(item => { this.total += item.price; });

    });

  }

}
