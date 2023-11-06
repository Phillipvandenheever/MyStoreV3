import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItemDetailComponent } from '../product-item-detail/product-item-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<ProductListComponent[]> {
    return this.http.get<ProductListComponent[]>('assets/data.json')
  }

  getPostsById(): Observable<ProductItemDetailComponent[]> {
    return this.http.get<ProductItemDetailComponent[]>('assets/data.json')
  }
}
