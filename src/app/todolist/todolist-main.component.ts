import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-main',
  template: `
    <section class="main">
      <input class="toggle-all"
             type="checkbox">
    <ng-content></ng-content>
    </section>
  `,
  styles: []
})
export class TodolistMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
