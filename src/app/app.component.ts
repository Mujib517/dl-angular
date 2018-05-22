//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive and attr directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
     <h1 [ngStyle]="stl">Hello Angular</h1> 

    <div [ngSwitch]="priority">
        <h1 *ngSwitchCase="'High'">High Priority Task</h1>
        <h1 *ngSwitchCase="'Medium'">Medium Priority Task</h1>
        <h1 *ngSwitchCase="'Low'">Low Priority Task</h1>
        <h1 *ngSwitchDefault>Very Low Priority Task</h1>
    </div>


    `
})
export class AppComponent {
    priority: string = "affdaf";

    constructor() {

    }
}