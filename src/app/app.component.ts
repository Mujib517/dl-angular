import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<h1>Hello Angular</h1>  
    
  
    <div>
        <app-home></app-home>
    </div>
    <div>
        <app-about></app-about>
    </div>
    
    `
})
export class AppComponent {
}