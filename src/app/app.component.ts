import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Directives</h1>

    <input type="checkbox" (change)="flag = !flag">

    <h2 *appIf="flag">Content</h2>

    <!--<ng-template [appIf]="flag">-->
      <!--<h2>Content</h2>-->
    <!--</ng-template>-->

  `
})

export class AppComponent {
    flag = true;
}
