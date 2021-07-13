import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService,
              private authService: AuthService,
              private router: Router ) { }
 
  products!: Product[];
  searchWord:any;
  sort = '';
  isAsc= false;
  subscription!: Subscription
  isLogged !:boolean

  ngOnInit(): void {
   this.getProducts();
   this.subscription = this.authService.user
   .subscribe(
     user => {
      if(user) this.isLogged = true;
      else this.isLogged = false;
     }
   )
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

  onAddtoCart() {
    if(!this.isLogged) {
        this.router.navigate(['/login'])
    } 
    else {

    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

