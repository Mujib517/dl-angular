import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../shared/product.service";

// snake casing
// pipes: lowercase, uppercase, tiltecase, currency, date, json, async
@Component({
  selector: 'app-product-list',
  template: `
  <h1>Products</h1>
  <div class="col-md-7">
   <app-product [product] ="prd"  *ngFor="let prd of products"></app-product>
    <hr/>
  </div>
  `

})
export class ProductListComponent {

  products: any[];

  constructor(svc:ProductService) {
    svc.get().subscribe(
      res => this.products = res["data"],
      err => console.log(err)
    );
  }
}
