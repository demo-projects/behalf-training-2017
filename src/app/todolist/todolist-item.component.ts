import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  template: `
    <li>
      <div class="view">
        <input class="toggle"
               type="checkbox">
        <label>Todo Title</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class TodolistItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
