import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[]=[];
  constructor(private shoppongCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppongCartService.bascket
        .subscribe(products =>
          this.products = [...products]);
  }

}
