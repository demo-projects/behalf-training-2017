import {Component, Input, EventEmitter, Output, AfterViewChecked, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  template: `
    <header class="header">
      <h1>{{ title  }}</h1>
      <input class="new-todo"
             type="text"
             (keydown.enter)="onAdd.emit($event.target.value)"
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `
})
export class TodolistHeaderComponent implements AfterViewChecked{

  @Input() title: string;
  @Output() onAdd = new EventEmitter<string>();
  public cd: ChangeDetectorRef;

  constructor(cd: ChangeDetectorRef) {
    this.cd = cd;

  }

  ngAfterViewChecked(): void {
    this.cd.detach();
    // this.cd.reattach();
    // this.cd.detectChanges();
  }

// todo: will throw error!!
  // ngAfterViewChecked(): void {
  //   this.title = "NIR";
  // }
}
