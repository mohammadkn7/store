import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProductsComponent } from './products/products.component';
import { CommaSepratorPipe } from './shared/pipe/comma-seprator.pipe';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FuzzySearchPipe } from './shared/pipe/fuzzy-search.pipe';
import { SortPipe } from './shared/pipe/sort.pipe';
import { AuthComponent } from './auth/auth.component';

import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    UserRegisterComponent,
    ProductsComponent,
    CommaSepratorPipe,
    ProductDetailComponent,
    FuzzySearchPipe,
    SortPipe,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
