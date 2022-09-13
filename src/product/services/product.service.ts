import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  getProducts(size: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://random-data-api.com/api/coffee/random_coffee?size=${size}`);
  }
}
