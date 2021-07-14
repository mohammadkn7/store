import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFlip, EffectCube } from "swiper/core";
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

 SwiperCore.use([Autoplay, Pagination, Navigation,EffectFlip,EffectCube ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  productImgs = [
    'https://picsum.photos/1000/600?random=1',
    'https://picsum.photos/1000/600?random=2',
    'https://picsum.photos/1000/600?random=3',
    'https://picsum.photos/1000/600?random=4',
  ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();    
  }

}
