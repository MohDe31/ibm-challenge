import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { LoadProductsFail, LoadProductsSuccess, LOAD_PRODUCTS } from '../actions/products.action';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PRODUCTS),
    mergeMap(() => this.productService.getProducts(50)
      .pipe(
        map(products => new LoadProductsSuccess(products)),

        catchError((err) => of(new LoadProductsFail(err)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}