import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Product } from '../products/product.model';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private shoppingCartService: ShoppingCartService ) { }

  isLogged !: boolean;
  basket!: Product[];
  ngOnInit(): void {
    this.authService.user
      .subscribe( d => {
        this.isLogged = d;
      });
    
    this.shoppingCartService.bascket.subscribe(
      p => {
        this.basket = p;
      }
    )
  }


  onLogout() {
    this.authService.logOut();
  }

}
