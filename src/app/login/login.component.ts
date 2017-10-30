import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

interface Login {
  username: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  template: `
    <app-sign-in></app-sign-in>
    <!--<app-recover></app-recover>-->
  `,
  styles: []
})
export class LoginComponent {



}
