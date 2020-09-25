import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDataService } from 'src/app/services/cart-data.service';
import { PriceService } from 'src/app/services/price.service';
import { PriceResult } from 'src/app/models/price-result';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [];
  total = 0;

  constructor(private dataService: CartDataService, private priceService: PriceService) { }

  ngOnInit(): void {
    this.dataService.recieveData().subscribe((product: Product) => {
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

  }

}
