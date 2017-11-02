import {select} from '@angular-redux/store';
import {Component, OnInit} from '@angular/core';
import {ListActionsService} from '../store/actions/list-actions.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-todolist-header [title]="title"
                           (onAdd)="listActions.addItem($event)"></app-todolist-header>
      <app-todolist-main>
        <span *ngIf="pending | async">Fectching items..</span>
        <app-todolist-list></app-todolist-list>
      </app-todolist-main>

      <app-todolist-footer></app-todolist-footer>

    </section>
  `,
  styles  : []
})
export class TodolistComponent implements OnInit {
  public listActions: ListActionsService;
  public title: string;

  @select(['ui', 'pending']) pending;

  constructor(listActions: ListActionsService) {
    this.listActions = listActions;
  }

  ngOnInit(): void {
    this.listActions.getItems();
  }
}
