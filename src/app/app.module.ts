import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HistoryModule} from './history/history.module';
import {LoginModule} from './login/login.module';
import {TodolistModule} from './todolist/todolist.module';
import {UtilsModule} from './utils/utils.module';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    UtilsModule,
    BrowserModule,
    LoginModule,
    TodolistModule,
    HistoryModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {

}
