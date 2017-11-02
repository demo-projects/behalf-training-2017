import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  template : `
    <a routerLink="login">login</a>
    <a routerLink="list">list</a>
    <a routerLink="log">history</a>

    <!--routing placeholder-->
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
}
