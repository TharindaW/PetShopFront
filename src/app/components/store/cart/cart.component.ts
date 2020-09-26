import { Component, OnInit } from '@angular/core';
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


  cartItems = [];
  cartItemsss: CartItem[] = [];
  total = 0;

  constructor(private dataServiceCart: CartDataService,
              private dataServiceCheckout: CheckoutDataService,
              private priceService: PriceService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataServiceCart.recieveData().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let cartItem = null;

    let foundInCart = false;
    for (const i in this.cartItems) {
      if (this.cartItems[i].id === product.productId) {
        this.cartItems[i].qty++;
        cartItem = i;
        foundInCart = true;
        break;
      }
    }

    let priceResult: PriceResult = null;


    if (!foundInCart) {
      this.priceService.calculatePrice('CARTON', 1, product.productId).subscribe((price) => {
        console.log(price);
        priceResult = price;
        this.cartItems.push({ id: product.productId, qty: 1, name: product.name, price: priceResult.price });
        this.total = 0;
        this.cartItems.forEach(item => { this.total += item.price; });
        this.cartItemsss.push(new CartItem(product, priceResult.price, 1));
      });
    }
    else {
      this.priceService.calculatePrice('CARTON', this.cartItems[cartItem].qty, product.productId).subscribe((price) => {
        console.log(price);
        priceResult = price;
        this.cartItems[cartItem].price = priceResult.price;
        this.total = 0;
        this.cartItems.forEach(item => { this.total += item.price; });
      });
    }

    // console.log( this.cartItemsss);

  }
  sendDataToCheckout() {
    console.log('side cart');
    console.log(this.cartItemsss);
    this.dataServiceCheckout.sendDataToCheckout(this.cartItemsss);
    this.router.navigate(['/checkout']);
  }

}
