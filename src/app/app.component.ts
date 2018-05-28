//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive and attr directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `

    <app-header></app-header>

    <main class="container">
     <app-product-list></app-product-list>
    </main>

    <app-footer></app-footer>

    `
})
export class AppComponent {
   
}