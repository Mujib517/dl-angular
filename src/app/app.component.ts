//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
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
                <td> Value </td>
                <td> Index</td>
                <td> Even</td>
                <td> Odd</td>
                <td> First</td>
                <td> Last</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let val of arr;let idx=index;let evn=even; let odd=odd;let fst=first;let lst=last;">
                <td>{{val}}</td>
                <td>{{idx}}</td>
                <td>{{evn}}</td>
                <td>{{odd}}</td>
                <td>{{fst}}</td>
                <td>{{lst}}</td>
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