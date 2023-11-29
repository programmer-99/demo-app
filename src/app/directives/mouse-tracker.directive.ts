// mouse-tracker.directive.ts

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseTracker]'
})
export class MouseTrackerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Assuming you have classes 'cursor-outer' and 'cursor-inner' on your divs
    const outerCursor = this.el.nativeElement.querySelector('.cursor-outer');
    const innerCursor = this.el.nativeElement.querySelector('.cursor-inner');

    // Apply translation using Renderer2
    this.renderer.setStyle(outerCursor, 'transform', `translate(${x}px, ${y}px)`);
    this.renderer.setStyle(innerCursor, 'transform', `translate(${x}px, ${y-17}px)`);
  }
}
