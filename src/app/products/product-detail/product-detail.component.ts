import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLinkActive } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';



SwiperCore.use([Autoplay,  Navigation ]);


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  id!: number;
  products!: Product[];
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private shoppingCartservice: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.productService.getProduct(this.id);
      }
    );

    this.getProductsRelated();
  }

  getProductsRelated() {
    this.products = this.productService.getProductsRelated();
  }

  onAddtoCart(product : Product) {
    this.shoppingCartservice.addToBascket(product);
  }


}
