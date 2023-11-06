import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';


//decorator
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() public userInfo: any;
  quantity!: number;
  @Input() products!: Product[];
  @Output() addToCartClick = new EventEmitter<Product>();

  public constructor(private http: HttpClient, private router: Router, private cartService: CartService) { }

  public ngOnInit(): void {
    //this should be in a service
    const url: string = '/assets/data.json';
    this.http.get<Product[]>(url).subscribe((response: Product[]) => {
      this.userInfo = response;
      // const item = response.find(x => x.id == 1)
      // console.log(item);

    });
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(["/cart"])
    alert("added to cart!")
  }

  increase(product: Product): void {
    product.quantity += 1;
  }

  decrease(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }



}
