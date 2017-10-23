import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-todolist-header></app-todolist-header>
      <app-todolist-main></app-todolist-main>
      <app-todolist-footer></app-todolist-footer>
    </section>
  `,
  styles: []
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
