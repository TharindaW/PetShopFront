import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { FiltersComponent } from './components/store/filters/filters.component';
import { ProductListComponent } from './components/store/product-list/product-list.component';
import { CartComponent } from './components/store/cart/cart.component';
import { ProductComponent } from './components/store/product-list/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
