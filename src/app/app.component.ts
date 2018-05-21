import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
            <h1>Hello Angular</h1> 

            <h1>{{name}}</h1>

            <input type="text" [(ngModel)]="name"/>
    `
})
export class AppComponent {
    name: string = "John";
}