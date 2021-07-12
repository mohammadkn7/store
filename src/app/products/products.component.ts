import { Component, OnInit } from '@angular/core';
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
  searchWord:any;
  sort = '';
  isAsc= false;

  ngOnInit(): void {

   this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
    console.log(this.getProducts);
  }

  sortPrice(sortType:string) {
    this.isAsc = !this.isAsc;   
    if (this.isAsc) this.sort = 'asc' ;
    else this.sort = 'desc';

    this.sort = sortType;
    
  }

}

