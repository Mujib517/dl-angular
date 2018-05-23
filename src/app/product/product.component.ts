import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-product',
  template: `
    <div class="well">
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
      <div>
        {{getRelativeTime(product.lastUpdated)}}
      </div>
    </div>
  `
})
export class ProductComponent {
  @Input()
  product: any;

  getRelativeTime(date){
    return moment(date).fromNow();
  }
}