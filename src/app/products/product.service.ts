import { Injectable } from '@angular/core';
import { mockProduct } from './procucts.model';
// import {products} from './procucts.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products!: Product[]
  products: Product[] = [
    new Product (0, 'https://picsum.photos/1000/1000?random=1', 'product1', 100000),
    new Product (1, 'https://picsum.photos/1000/1000?random=2', 'product2', 100000),
    new Product (2, 'https://picsum.photos/1000/1000?random=3', 'product3', 500000),
    new Product (3, 'https://picsum.photos/1000/1000?random=4', 'product4', 1400000),
    new Product (4, 'https://picsum.photos/1000/1000?random=5', 'product5', 100000),
    new Product (5, 'https://picsum.photos/1000/1000?random=6', 'product6', 80000),
    new Product (6, 'https://picsum.photos/1000/1000?random=7', 'product37', 500000),
    new Product (7, 'https://picsum.photos/1000/1000?random=8', 'product8', 1400000),
    new Product (8, 'https://picsum.photos/1000/1000?random=9', 'product9', 100000),
    new Product (9, 'https://picsum.photos/1000/1000?random=10', 'product10', 90000),
    new Product (10, 'https://picsum.photos/1000/1000?random=11', 'product11', 500000),
    new Product (11, 'https://picsum.photos/1000/1000?random=12', 'product12', 1400000),
  ];
  p : any = mockProduct;
  constructor() {     
    // this.products = this.p;
    
  }

  setProducts(products: Product[]) {
    this.products = [...products];      
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }
}

