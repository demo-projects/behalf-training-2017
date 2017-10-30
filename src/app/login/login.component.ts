import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <app-sign-in></app-sign-in>
    <app-recover></app-recover>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
