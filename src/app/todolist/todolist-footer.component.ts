import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todolist-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> items left</span>
      <button class="clear-completed">Clear completed
      </button>
    </footer>
  `,
  styles  : []
})
export class TodolistFooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
