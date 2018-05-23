import { Component } from "@angular/core";

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

  constructor() {
    this.products = [{ id: 1, brand: 'Nokia', model: 'N8', price: 100, inStock: true,lastUpdated:Date.now() },
    { id: 2, brand: 'Samsung', model: 'Galaxy S9', price: 600, inStock: true,lastUpdated:Date.now() },
    { id: 3, brand: 'Apple', model: 'Iphone X', price: 1000, inStock: false,lastUpdated:Date.now() }];
  }


}