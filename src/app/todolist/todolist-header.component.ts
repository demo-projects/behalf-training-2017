import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `,
  styles: []
})
export class TodolistHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
