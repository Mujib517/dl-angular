//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive and attr directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
    <app-home></app-home>
    <app-about></app-about>
     <app-product-list></app-product-list>
    `
})
export class AppComponent {
   
}