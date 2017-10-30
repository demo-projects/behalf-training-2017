import {Directive, Output, EventEmitter, HostListener} from '@angular/core';


@Directive({
  selector: '[keydown.up]'
})
export class KeydownDirective {

  @Output('keydown.up')
  public upevent = new EventEmitter();

  @HostListener('keydown', ['$event'])
  emitUpEvent(event) {
    if (event.keyCode === 38) {
      this.upevent.emit();
    }
  }


}
