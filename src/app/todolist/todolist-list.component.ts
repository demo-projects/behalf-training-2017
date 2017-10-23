import {Component, Input} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-todolist-list',
  template: `
    <ul class="todo-list">
      <app-todolist-item
          *ngFor="let i of items"
          [item]="i"></app-todolist-item>
    </ul>
  `,
})
export class TodolistListComponent {
  @Input() items: Item[];
}
