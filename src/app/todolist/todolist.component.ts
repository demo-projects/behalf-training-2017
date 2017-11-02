import {Component, OnInit, SkipSelf, Self, Optional} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {TodolistService} from './todolist.service';

@Component({
  selector : 'app-todolist',
  template : `
    <section class="todoapp">
      <app-todolist-header [title]="title"
                           (onAdd)="addItem($event)"></app-todolist-header>
      <app-todolist-main>
        <app-todolist-list [items]="todolist.items"></app-todolist-list>
      </app-todolist-main>

      <app-todolist-footer [count]="todolist.items | countBy:'completed':false">
      </app-todolist-footer>

    </section>
  `,
  styles   : []
})
export class TodolistComponent {

  public todolist: TodolistService;
  public title: string;

  constructor(list: TodolistService) {
    this.todolist = list;
    this.title    = 'MyAPP';
  }

  addItem(title: string) {
    this.todolist.addItem(title);
  }

}
