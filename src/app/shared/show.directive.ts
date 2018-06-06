import { Directive, ElementRef, Renderer2 } from "@angular/core";
//marker on DOM element
// <h1 *ngIf="abc"></h1>

@Directive({
  selector: '[dlShow]',
  inputs: ['dlShow']
})
export class ShowDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //this.el.nativeElement.style.display="none";
  }

  set dlShow(val: boolean) {
    if (val)
      this.renderer.setStyle(this.el.nativeElement, "display", "block");
    else
      this.renderer.setStyle(this.el.nativeElement, "display", "none");
  }
}