
// imports
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() cartItems: Product[] = [];
  posts: Product[] = []

  constructor(private cartService: CartService) { }
  totalPrice: number = 0;
  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.getTotalPrice()
      this.updateTotalPrice()
    });
  }

  // Update total price based on items added or removed
  updateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  //  get the total price and return a value
  getTotalPrice(): number {
    return this.totalPrice;
  }

  // increase product amount
  increase(product: Product): void {
    product.quantity += 1;
  }

  // decrease product amount
  decrease(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }

  // remove product from cart
  removeProducts(index: number) {
    this.cartItems.splice(index, 1)
    this.updateTotalPrice();
    alert("product removed from cart!");
  }

};
