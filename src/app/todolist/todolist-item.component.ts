import {Component, Input} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-todolist-item',
  template: `
    <li [ngClass]="{ completed: item.completed }">
      <div class="view">
        <input class="toggle"
               (change)="item.completed = $event.target.checked"
               [checked]="item.completed"
               type="checkbox">

        <label>{{  item.title }}</label>

        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
})
export class TodolistItemComponent {

  @Input() item: Item;


}
