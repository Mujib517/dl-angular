import { Component } from "@angular/core";

// snake casing
// pipes: lowercase, uppercase, tiltecase, currency, date, json, async
@Component({
  selector: 'app-product-list',
  template: `
  <h1>Products</h1>
  <div class="col-md-7">
  <div *ngFor="let product of products" class="well">
    <h3>{{product.brand | uppercase}}</h3>
    <h3>{{product.model | lowercase}}</h3>
    <b>{{product.price | currency}}</b>
    <div [ngClass]="product.inStock? 'fg2':'fg'">
      InStock: 
      <input type="checkbox" [disabled]="true" [checked]="product.inStock"/>
    </div>
    <div>
      {{product.lastUpdated | date:'MM-dd-yyyy hh:mm a'}}
    </div>
    <hr/>
  </div>
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