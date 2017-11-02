import {select} from '@angular-redux/store';
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

@Component({
  selector       : 'app-todolist-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template       : `
    <ul class="todo-list">
      <app-todolist-item *ngFor="let i of (items | async)"
                         [item]="i"></app-todolist-item>
    </ul>
  `,
})
export class TodolistListComponent {
  @select('list') items;
}
