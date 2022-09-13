import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../product/store/effects/product.effect';
import { ProductsListModule } from './products-list/products-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsListModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([ ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
