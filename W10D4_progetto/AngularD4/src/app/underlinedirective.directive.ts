import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderlinedirective]'
})
export class UnderlinedirectiveDirective {

  constructor(private el:ElementRef, render:Renderer2) {
    render.setStyle(this.el.nativeElement, "textDecoration", "underline")
   }

}
