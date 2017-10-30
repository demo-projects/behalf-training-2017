import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HistoryModule} from './history/history.module';
import {LoginModule} from './login/login.module';
import {TodolistModule} from './todolist/todolist.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TodolistComponent} from './todolist/todolist.component';
import {HistoryComponent} from './history/history.component';
import {routes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    LoginModule,
    TodolistModule,
    HistoryModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {

}
