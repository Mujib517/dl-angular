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
      <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
      <li routerLinkActive="active"><a routerLink="specs">Specs</a></li>
    </ul>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ProductDetailComponent {

  product: any;

  constructor(private productSvc: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(res => {
        this.product = res;
        this.productSvc.reviews = res["reviews"];
      }
        ,
        err => console.log(err));
  }
}
