import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDataService } from 'src/app/services/cart-data.service';
import { PriceService } from 'src/app/services/price.service';
import { PriceResult } from 'src/app/models/price-result';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() itemChange:EventEmitter<CartItem> = new EventEmitter<CartItem>();

  cartItems: CartItem[] = [];
  total = 0;

  constructor(private dataServiceCart: CartDataService,
              private dataServiceCheckout: CheckoutDataService,
              private priceService: PriceService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataServiceCart.recieveData().subscribe((cart: CartItem) => {
      this.addProductToCart(cart);
    });
  }

  addProductToCart(cart: CartItem) {

    let existCartItem: CartItem = null;
    let foundInCart = false;

    let index = 0;
    for (const existCart of this.cartItems) {
      index++;
      if (existCart.product.productId === cart.product.productId) {

        existCart.carton += cart.carton;
        existCart.unit += cart.unit;

        existCartItem = existCart;
        foundInCart = true;
        break;
      }
    }

    let priceResult: PriceResult = null;


    if (!foundInCart) {

      this.priceService.calculatePrice(cart).subscribe((price) => {
        console.log(price);
        priceResult = price;
        // this.cartItems.push({ id: product.productId, qty: 1, name: product.name, price: priceResult.price });
        cart.price = priceResult.price;
        this.cartItems.push(cart);
        this.total = 0;
        this.cartItems.forEach(item => { this.total += item.price; });

        this.cartItems[index - 1 ].carton = priceResult.cartons;
        this.cartItems[index - 1 ].unit = priceResult.units;
      });
    }
    else {

      this.priceService.calculatePrice(existCartItem).subscribe((price) => {
        console.log(price);
        priceResult = price;
        existCartItem.price = priceResult.price;
        this.cartItems[index - 1 ].price = priceResult.price;
        this.total = 0;
        this.cartItems.forEach(item => { this.total += item.price; });


        this.cartItems[index - 1 ].carton = priceResult.cartons;
        this.cartItems[index - 1 ].unit = priceResult.units;
      });

    }

    this.itemChange.emit( this.cartItems[index - 1 ] );
    // console.log( this.cartItemsss);

  }
  sendDataToCheckout() {
    console.log('side cart');
    console.log(this.cartItems);
    this.dataServiceCheckout.sendDataToCheckout(this.cartItems);
    this.router.navigate(['/checkout']);
  }

}
