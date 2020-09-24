import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDataService } from 'src/app/services/cart-data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [];
  total = 0;

  constructor(private dataService: CartDataService) { }

  ngOnInit(): void {
    this.dataService.recieveData().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

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
