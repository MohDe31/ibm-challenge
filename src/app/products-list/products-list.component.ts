import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../product/models/product';

import { getCoffees, ProductState } from '../../product/store/reducers/products.reducer';
import { LoadProducts } from '../../product/store/actions/products.action';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public readonly pageSize: number = 10;
  public readonly totalFetch: number = 50;

  public page: number = 1;

  public products: Observable<Product[]> = this.store.select<Product[]>(getCoffees);

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
  }

  setPage(page: number) {
    this.page = page;
  }

}
