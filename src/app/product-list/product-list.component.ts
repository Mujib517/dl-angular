import { Component } from "@angular/core";

// snake casing
@Component({
  selector: 'app-product-list',
  template: `
  <h1>Products</h1>

  <div *ngFor="let product of products">
    <h3>{{product.brand}}</h3>
    <h3>{{product.model}}</h3>
    <span>{{product.price}}</span>
    <div [ngClass]="product.inStock? 'fg2':'fg'">
      InStock: 
      <input type="checkbox" [disabled]="true" [checked]="product.inStock"/>
    </div>
    <hr/>
  </div>

  `

})
export class ProductListComponent {

  products: any[];

  constructor() {
    this.products = [{ id: 1, brand: 'Nokia', model: 'N8', price: 100, inStock: true },
    { id: 2, brand: 'Samsung', model: 'Galaxy S9', price: 600, inStock: true },
    { id: 3, brand: 'Apple', model: 'Iphone X', price: 1000, inStock: false }];
  }


}