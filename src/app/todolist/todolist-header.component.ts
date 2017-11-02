import {Component, Input, EventEmitter, Output} from '@angular/core';

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
export class TodolistHeaderComponent  {

  @Input() title: string;
  @Output() onAdd = new EventEmitter<string>();
}
