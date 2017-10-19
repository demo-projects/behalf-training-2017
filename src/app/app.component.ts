import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
  `
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Hello Angular';
  }
}
