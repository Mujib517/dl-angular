//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
     <h1 [ngStyle]="stl">Hello Angular</h1> 
    `
})
export class AppComponent {
    stl: any = {
        border: '1px solid black',
        color: 'green',
        'background-color': 'yellow'
    };
}