import { Component } from '@angular/core';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';
  products: Product[] = [];

  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }
}

