import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
    <h2>Login Form</h2>

    <form [formGroup]="loginForm"
          (ngSubmit)="submit()">

      <input type="text"
             formControlName="username"
             placeholder="username">

      <span *ngIf="username.invalid">invalid username</span>

      <input type="password"
             [readonly]="username.invalid"
             formControlName="password"
             placeholder="password">

      remember me <input type="checkbox"
                         formControlName="rememberMe">

      <button type="submit">submit</button>
    </form>
  `,
  styles  : [` input.ng-invalid {
    border-color: red
  } `]
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username  : ['', Validators.required],
      password  : '',
      rememberMe: false,
    });

    this.username.valueChanges.subscribe(v => console.log(v));

  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  submit() {
    if (this.username.valid) {
      console.log(this.loginForm.value);
    }
  }
}
