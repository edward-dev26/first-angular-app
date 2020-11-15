import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') dStyles: { border?: string, color?: string, borderRadius?: string };

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onEnter() {
    Object.keys(this.dStyles).forEach(key => {
      this.renderer.setStyle(this.el.nativeElement, key, this.dStyles[key]);
    });
  }

  @HostListener('mouseleave') onLeave() {
    Object.keys(this.dStyles).forEach(key => {
      this.renderer.setStyle(this.el.nativeElement, key, null);
    });
  }
}
