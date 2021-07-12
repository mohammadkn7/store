import { Component, OnInit } from '@angular/core';
import { Products } from './procucts.model';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService ) { }

  products!: Product[];

  ngOnInit(): void {

   this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
    console.log(this.getProducts);
  }

}

