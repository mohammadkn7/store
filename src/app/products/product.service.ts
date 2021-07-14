import { Injectable } from '@angular/core';
import { mockProduct } from './procucts.model';
// import {products} from './procucts.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  products: Product[] = [
    new Product (0, 'https://picsum.photos/1000/1000?random=1', 'London', 1200000),
    new Product (1, 'https://image.shutterstock.com/image-photo/tehraniranfamous-night-view-tehranflow-traffic-260nw-1520878961.jpg', 'Tehran', 110000),

    new Product (2, 'https://picsum.photos/1000/1000?random=3', 'Tokyo', 1500000),
    new Product (3, 'https://picsum.photos/1000/1000?random=4', 'Leeds', 1100000),
    new Product (4, 'https://picsum.photos/1000/1000?random=5', 'Paris', 100000),
    new Product (5, 'https://picsum.photos/1000/1000?random=6', 'Jakarta', 80000),
    new Product (6, 'https://picsum.photos/1000/1000?random=7', 'Los Angeles', 500000),
    new Product (7, 'https://picsum.photos/1000/1000?random=8', 'Istanbul', 1400000),
    new Product (8, 'https://picsum.photos/1000/1000?random=9', 'Hong Kong', 100000),
    new Product (9, 'https://picsum.photos/1000/1000?random=10', 'Milan', 90000),
    new Product (10, 'https://picsum.photos/1000/1000?random=11', 'Barcelona', 500000),
    new Product (11, 'https://picsum.photos/1000/1000?random=12', 'Berlin', 1400000),

  ];
 
  isMockProduct = false;
  p : any = mockProduct;
  constructor() {  
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

  getProductsRelated() {
    return this.products.slice(0,7);
  }
}

