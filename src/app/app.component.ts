import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<h1>Hello Angular</h1>  
    
       <h1> {{1+2}}  </h1>
       <h1>{{"Mujib" + " Rahman"}}</h1>
       <h2>{{getName()}}</h2>
       {{obj}}

       {{obj?"True":"False"}}
   
    `
})
export class AppComponent {

    name: string = "John";
    obj ="";
    surname: string = " Labash";

    getName(): string {
        //time consuming
        //no side effects
        return this.name + ' ' + this.surname;
    }

}