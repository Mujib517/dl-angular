//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <h1>Hello Angular</h1> 
    <div [hidden]="show">
        ......
        <h1 >{{name}}</h1>
    </div>

    <input type="text" [(ngModel)]="name"/>

    <button (click)="toggle()">Toggle</button>
    `
})
export class AppComponent {
    name: string = "John";
    show: boolean = true;

    toggle() {
        //this.show = this.show ? false : true;
        this.show = !this.show;
    }
}