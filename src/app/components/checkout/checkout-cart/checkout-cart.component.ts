import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDataService } from 'src/app/services/cart-data.service';
import { PriceService } from 'src/app/services/price.service';
import { PriceResult } from 'src/app/models/price-result';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {


  cartItems = [];
  cartItemsss: CartItem[] = [];
  total = 0;

  constructor(private dataServiceCart: CartDataService,
              private dataServiceCheckout: CheckoutDataService,
              private priceService: PriceService,
              private router: Router) { }

  ngOnInit(): void {
    let product1 = new Product( 1 , 'Penguin-ears' , '' , false ,20 , 825, 'https://i.pinimg.com/originals/f2/99/69/f299690d8b53f5e038eb3d18ffdf3e7d.jpg');
    let product2 = new Product( 2 , 'Horseshoe' , '' , false ,5 , 175, 'https://cdn.shopify.com/s/files/1/0727/7135/products/HorseshoeBuckingBronco_1200x630.jpg');

    this.cartItemsss = [ new CartItem( product1  , 500 , 3) , new CartItem( product2  , 600 , 4)];
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
