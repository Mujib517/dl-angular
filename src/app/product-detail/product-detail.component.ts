import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1>Product Detail</h1> 

    <div *ngIf="product">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h4>{{product.brand | uppercase }} {{product.model}}</h4>
        </div>
        <div class="panel-body">
          <div>{{product.price | currency}}</div>
          <div> InStock: {{product.inStock ? "Yes" : "Out of stock" }}</div>
        </div>
        <div class="panel-footer">
          {{product.lastUpdated | relativetime}}
        </div>
      </div>
    </div>

    <ul class="nav-tabs nav">
      <li class="active"><a routerLink="reviews">Reviews</a></li>
      <li><a routerLink="specs">Specs</a></li>
    </ul>
  `
})
export class ProductDetailComponent {

  product: any;

  constructor(productSvc: ProductService, route: ActivatedRoute) {
    let id = route.snapshot.params.id;

    productSvc.getById(id)
      .subscribe(res => this.product = res,
        err => console.log(err));
  }
}
