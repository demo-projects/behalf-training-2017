import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Child Components</h1>

    <app-child title="title"
               text="click me"
               (childClick)="test($event)"></app-child>
  `
})

export class AppComponent {

  test(event) {
    console.log(event);
  }

}
