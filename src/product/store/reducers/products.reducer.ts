import { ActionReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/product/models/product"
import { ProductsAction } from "../actions/products.action";

export interface ProductState {
    data: Product[];
    loaded: boolean;
    loading: boolean;
};

export const initialState: ProductState = {
    data: [],
    loaded: false,
    loading: false
};


export function reducer(
    state: ProductState = initialState,
    action: ProductsAction): ProductState {

        switch (action.type) {
            case "[Products Page] Load Products":
                return {
                    ...state, 
                    loading: true
                };
            
            case "[Products Page] Products loading failed":
                return {
                    ...state,
                    loading: false,
                    loaded: false
                };

            case "[Products Page] Products loading succeed":
                const data = action.payload || [];
                
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    data
                };
        }

        return state;

    }


export const productsReducer: ActionReducer<ProductState, ProductsAction> = reducer;


export const getProductsState = createFeatureSelector<ProductState>('products');

export const getCoffees = createSelector(getProductsState, (state: ProductState)=>state.data);