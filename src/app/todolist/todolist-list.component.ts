import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-list',
  template: `
    <ul class="todo-list">
      <app-todolist-item></app-todolist-item>
    </ul>
  `,
  styles: []
})
export class TodolistListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
