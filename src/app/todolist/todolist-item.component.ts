import {Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from './item';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist-item',
  template: `
    <li [ngClass]="{ completed: item.completed }">
      <div class="view">
        <input class="toggle"
               (change)="item.completed = $event.target.checked"
               [checked]="item.completed"
               type="checkbox">

        <label>{{  item.title | up }}</label>

        <button (click)="list.removeItem(item)" class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
})
export class TodolistItemComponent implements OnChanges, OnInit, OnDestroy{

  @Input() item: Item;

  constructor(public list: TodolistService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.item);
  }

  ngOnDestroy(): void {
    console.log('component destroyed!');
  }
}
