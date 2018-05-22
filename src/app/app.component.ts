//directives
//ngIf, ngFor, ngClass, ngStyle, ngSwitch
//structural directive
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
     <h1 [ngClass]="cls">Hello Angular</h1> 
    `
})
export class AppComponent {
    // cls: string[] = ["fg" ,"bg"];
    myProp: boolean=true;

    cls: any = {
        fg: true,
        bg: this.myProp
    };
}