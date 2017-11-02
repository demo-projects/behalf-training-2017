import {Component, OnInit, Input} from '@angular/core';
import {ListActionsService} from '../store/actions/list-actions.service';

@Component({
  selector: 'app-todolist-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> items left</span>
      <button (click)="listActions.reset()" class="clear-completed">Clear completed
      </button>
    </footer>
  `,
  styles  : []
})
export class TodolistFooterComponent {

  constructor(public listActions: ListActionsService) {}
}
