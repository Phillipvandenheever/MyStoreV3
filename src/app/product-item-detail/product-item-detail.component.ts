import { Component, Input, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../models/products';
import { CartService } from '../cart/cart.service';

//decorator
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {
  @Input() public userInfo: any;
  userId: any;
  quantity!: number;

  public constructor(private http: HttpClient, private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const url: string = '/assets/data.json';
    this.http.get<any[]>(url).subscribe((response) => {
      this.userInfo = response.find(x => x.id == id)

    });
  }

  increase(userInfo: ProductItemDetailComponent): void {
    userInfo.quantity += 1;
  }

  decrease(product: ProductListComponent): void {
    if (product.quantity > 0) { product.quantity -= 1; }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(["/cart"])
    alert("added to cart!")
  }
}

