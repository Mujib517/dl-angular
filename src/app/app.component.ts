import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    
        <h1 [class.red]="name">Hello Angular</h1> 
        
        <h1 [style.border]="name?'1px solid gray':'none'">My Heading</h1>
    
       <h1 > {{1+2}}  </h1>
       <h1>{{"Mujib" + " Rahman"}}</h1>
       <h2>{{getName()}}</h2>
       {{obj}}

       {{obj?"True":"False"}}

       <button (click)="onSave('data')">Save</button>
       <button [hidden]="false">Save2</button>
   
       <input type="text" [value]="obj?'True':'False'"/>
    `
})
export class AppComponent {

    name: string = "adkfjalkjdf";
    obj = "";
    surname: string = " Labash";

    getName(): string {
        //time consuming
        //no side effects
        //pure function
        return this.name + ' ' + this.surname;
    }

    onSave(param) {
        console.log("Data Saved!!", param);
    }

}