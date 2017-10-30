import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in.component';
import { RecoverComponent } from './recover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignInComponent, RecoverComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
