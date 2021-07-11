import { Component, OnInit } from '@angular/core';
import { Products } from './procucts.model';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products!: Product[];

  ngOnInit(): void {

    this.products = [...products]
  }

}


let products: Product[] = [
  new Product ('https://picsum.photos/1000/1000?random=1', 'product1', 100000),
  new Product ('https://picsum.photos/1000/1000?random=2', 'product2', 100000),
  new Product ('https://picsum.photos/1000/1000?random=3', 'product3', 500000),
  new Product ('https://picsum.photos/1000/1000?random=4', 'product4', 1400000),
  new Product ('https://picsum.photos/1000/1000?random=5', 'product5', 100000),
  new Product ('https://picsum.photos/1000/1000?random=6', 'product6', 80000),
  new Product ('https://picsum.photos/1000/1000?random=7', 'product37', 500000),
  new Product ('https://picsum.photos/1000/1000?random=8', 'product8', 1400000),
  new Product ('https://picsum.photos/1000/1000?random=9', 'product9', 100000),
  new Product ('https://picsum.photos/1000/1000?random=10', 'product10', 90000),
  new Product ('https://picsum.photos/1000/1000?random=11', 'product11', 500000),
  new Product ('https://picsum.photos/1000/1000?random=12', 'product12', 1400000),
]