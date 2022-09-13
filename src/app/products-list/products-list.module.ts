import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


import { productsReducer } from '../../product/store/reducers/products.reducer';
import { ProductsListComponent } from './products-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/product/store/effects/product.effect';
import { PaginatePipe } from '../pipes/paginate.pipe';


@NgModule({
  declarations: [
    ProductsListComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ ProductEffects ])
  ]
})
export class ProductsListModule { }
