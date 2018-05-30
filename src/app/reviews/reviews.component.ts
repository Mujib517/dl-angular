import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
    
  <h1 *ngIf="reviews && reviews.length>0">Reviews</h1>
  <h3 *ngIf="!reviews || reviews.length==0" > Be the first one to review</h3>

    <div *ngFor="let review of reviews">
       <div>
          <h4>{{review.name}}   {{review.rating}} *</h4>
          <b>{{review.subject}}</b>
          <p>{{review.message}}</p>
          <div>{{review.lastUpdated | relativetime}}</div>
          <hr/>
       </div>
    </div>
  `
})
export class ReviewsComponent {

  reviews: any[];

  constructor(productSvc: ProductService) {
    this.reviews = productSvc.reviews;
  }
}
