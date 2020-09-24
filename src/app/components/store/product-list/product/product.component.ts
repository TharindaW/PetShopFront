import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDataService} from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private dataService: CartDataService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.dataService.sendData(this.product);
  }

}
