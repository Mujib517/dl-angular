import { Component } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ProductService } from "../shared/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../shared/user.service";

// snake casing
// pipes: lowercase, uppercase, tiltecase, currency, date, json, async
@Component({
  selector: 'app-product-list',
  template: `
  <h1>Products</h1>
  <a routerLink="/products/new" class="btn btn-primary">Add New Product</a>
  <a routerLink="/products/reactive" class="btn btn-primary">Reactive Form</a>
  <div class="col-md-7">
   <app-product [product] ="prd"  *ngFor="let prd of products"></app-product>
    <hr/>
  </div>
  `

})
export class ProductListComponent {

  products: any[];

  constructor(private route: ActivatedRoute, private userSvc: UserService,
    private router: Router) {

    if (this.userSvc.isLoggedin()) {
      this.products = this.route.snapshot.data.products;
    }
    else {
      this.router.navigate(["login"]);
    }


    // var obs = productSvc.get();

    // obs.subscribe(
    //   res => this.products = res["data"],
    //   err => console.log(err),
    //   () => console.log("Completed")
    // );


  }
}