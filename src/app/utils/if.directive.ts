import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {


  constructor(private template: TemplateRef<any>,
              private entry: ViewContainerRef) {
  }

  @Input()
  set appIf(flag: boolean) {
    if (flag) {
      this.entry.createEmbeddedView(this.template);
    } else {
      this.entry.clear();
    }
  }

}
