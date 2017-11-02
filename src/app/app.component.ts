import {Component} from '@angular/core';
import {TodolistService} from './todolist/todolist.service';

@Component({
  selector: 'app-root',
  providers: [TodolistService],
  template: `
    <a routerLink="login">login</a>
    <a routerLink="list">list</a>
    <a routerLink="log">history</a>

    <pre>{{ list.items | json }}</pre>

    <app-todolist></app-todolist>
    <!--<router-outlet></router-outlet>-->
  `
})

export class AppComponent {

  constructor(public list: TodolistService) {

  }

}
