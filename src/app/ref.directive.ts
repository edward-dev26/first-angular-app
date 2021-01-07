import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appDir]'})
export class RefDirective {
  constructor(
    public containerRef: ViewContainerRef
  ) {}
}
