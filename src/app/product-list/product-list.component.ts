import { Component } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ProductService } from "../shared/product.service";
import { ActivatedRoute } from "@angular/router";

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

  constructor(private route: ActivatedRoute) {

    this.products = this.route.snapshot.data.products;

    console.log(this.route.snapshot.data);

    // var obs = productSvc.get();

    // obs.subscribe(
    //   res => this.products = res["data"],
    //   err => console.log(err),
    //   () => console.log("Completed")
    // );


  }
}