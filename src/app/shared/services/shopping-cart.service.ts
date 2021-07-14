import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public products: Product[] = [];
  isLogged !: boolean;
  public bascket =new BehaviorSubject<any>(this.products) ;

  constructor(private authService: AuthService,
              private router: Router) {

    this.authService.user
    .subscribe( d => {
      this.isLogged = d;
    })
   }

  addToBascket(product: Product) {
    if (this.isLogged) {
      this.products.push(product);
      this.bascket.next(this.products);
    } else {
      this.router.navigate(['/login']);
    }
  }


}
