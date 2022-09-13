import { Action } from '@ngrx/store';
import { Product } from 'src/product/models/product';


export const LOAD_PRODUCTS         = '[Products Page] Load Products';
export const LOAD_PRODUCTS_FAIL    = '[Products Page] Products loading failed';
export const LOAD_PRODUCTS_SUCCESS = '[Products Page] Products loading succeed';


export class LoadProducts implements Action {
    readonly type: string = LOAD_PRODUCTS;
    constructor(public payload?: Product[]) {}
}

export class LoadProductsFail implements Action {
    readonly type: string = LOAD_PRODUCTS_FAIL;
    constructor(public payload: Product[]) {}
}

export class LoadProductsSuccess implements Action {
    readonly type: string = LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}


export type ProductsAction = LoadProducts | LoadProductsFail | LoadProductsSuccess;