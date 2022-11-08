import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[studentBorderCard]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
   }

   @Input('studentBorderCard') borderColor:string

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor ||'#009688' );
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder("#f5f5f5");
  }
  
  private setBorder(color:string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;

  }
  
}

