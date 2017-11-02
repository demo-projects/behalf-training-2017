import {Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {Item} from './item';

@Component({
  selector       : 'app-todolist-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template       : `
    <ul class="todo-list">
      <app-todolist-item *ngFor="let i of items"
                         [item]="i"></app-todolist-item>
    </ul>
  `,
})
export class TodolistListComponent implements OnChanges {
  @Input() items: Item[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
