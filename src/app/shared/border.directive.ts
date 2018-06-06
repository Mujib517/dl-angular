import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[dlBorder]'
})
export class BorderDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, "border", "1px solid black");
  }
}