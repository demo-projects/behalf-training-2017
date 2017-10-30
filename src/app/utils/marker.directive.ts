import {Directive, HostBinding, HostListener, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @HostBinding('style.backgroundColor')
  private bgColor;

  @Input() appMarker: string;
  @Output() marked = new EventEmitter();

  constructor(element: ElementRef) {
    this.bgColor = '';
  }

  @HostListener('mouseenter')
  markText() {
    this.bgColor = this.appMarker;
    this.marked.emit();
  }

  @HostListener('mouseleave')
  clearMark() {
    this.bgColor = '';
  }

}
