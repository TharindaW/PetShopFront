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


    let priceResult: PriceResult = null;

    this.priceService.calculatePrice('CARTON', 1, product.productId).subscribe((price) => {
      console.log(price);
      priceResult = price;
    });


    let foundInCart = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.productId) {
        this.cartItems[i].qty++;
        foundInCart = true;
        break;
      }
    }

    if (!foundInCart) {
      this.cartItems.push({ id: product.productId, qty: 1, name: product.name, price: product.cartonPrice });
    }

    this.cartItems.forEach(item => { this.total += item.qty * item.price; });

  }

}
