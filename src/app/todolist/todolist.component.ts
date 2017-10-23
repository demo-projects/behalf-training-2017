import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {TodolistService} from './todolist.service';

@Component({
  selector : 'app-todolist',
  providers: [TodolistService],
  template : `
    <section class="todoapp">
      <app-todolist-header [title]="title"
                           (onAdd)="todolist.addItem($event)"></app-todolist-header>
      <app-todolist-main>
        <app-todolist-list [items]="todolist.items"></app-todolist-list>
      </app-todolist-main>

      <app-todolist-footer></app-todolist-footer>

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

}
