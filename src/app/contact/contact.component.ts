import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <h1 dlBorder>Contact Page</h1>
   <h1 [dlShow]="name">Heading</h1>
   <h1 *dlIf="name">Heading2</h1>
  `
})
export class ContactComponent {
  name: string = "";
  count: number;

  // constructor(){
  //   this.count=0;
  // }
}
