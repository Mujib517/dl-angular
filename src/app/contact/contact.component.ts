import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <h1>Contact Page</h1>
   <h1 [dlShow]="name">Heading</h1>
  `
})
export class ContactComponent {
  name:string="akjfkdaj";
}
