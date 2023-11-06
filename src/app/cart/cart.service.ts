
// imports
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products';

// injectables
@Injectable({
    providedIn: 'root',
})

// exports
export class CartService {
    private cartItems: Product[] = [];
    private cartItemsSubject = new BehaviorSubject<Product[]>([]);

    constructor() { }

    // get the cart item
    getCartItems() {
        return this.cartItemsSubject.asObservable();
    }

    // add the product to cart
    addToCart(product: Product) {
        this.cartItems.push(product);
        this.cartItemsSubject.next(this.cartItems);
    }

    // get total price of items as per total amount selected
    getTotalPrice(quantity: any) {
        quantity = quantity?.target?.value
        return this.cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    }
}
