//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <h1>Hello Angular</h1> 
    <div *ngIf="getStatus()">
        ......
        <h1 >{{name}}</h1>
    </div>

    <input type="text" [(ngModel)]="name"/>

    <button (click)="toggle()">Toggle</button>

    <ul>
        <li *ngFor="let val of arr">{{val}}</li>
    </ul>

    <table border="1">
        <thead>
            <tr>
                <td>
                    Value
                </td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let val of arr">
                <td>{{val}}</td>
            </tr>
        </tbody>
    </table>




    `
})
export class AppComponent {
    name: string = "John";
    show: boolean = true;
    arr: number[] = [1, 2, 3, 4, 5, 6];
    //arr:Array<number>=[1,2,3,4];


    getStatus() {
        //logic
        return this.show;
    }

    toggle() {
        //this.show = this.show ? false : true;
        this.show = !this.show;
    }
}