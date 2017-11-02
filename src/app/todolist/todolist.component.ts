import {Component, NgZone, ChangeDetectorRef} from '@angular/core';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-todolist-header [title]="title"
                           #header
                           (onAdd)="addItem($event)"></app-todolist-header>
      <app-todolist-main>
        <app-todolist-list [items]="todolist.items"></app-todolist-list>
      </app-todolist-main>

      <app-todolist-footer [count]="todolist.items | countBy:'completed':false">
      </app-todolist-footer>

    </section>
  `,
  styles  : []
})
export class TodolistComponent {

  public todolist: TodolistService;
  public title: string;

  constructor(list: TodolistService, zone: NgZone, cd: ChangeDetectorRef) {
    this.todolist = list;
    this.title    = 'todos';

    // zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     this.title++;
    //     if (this.title % 5 === 0) {
    //       cd.detectChanges();
    //     }
    //   }, 1000);
    // });

  }

  addItem(title: string) {
    this.todolist.addItem(title);
  }

}
