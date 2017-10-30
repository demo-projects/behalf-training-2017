import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <form>
      <input type="text"     placeholder="username">
      <input type="password" placeholder="password">
      <button type="submit"> submit</button>
    </form>
  `,
  styles  : []
})
export class SignInComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
