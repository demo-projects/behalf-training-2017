import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {TodolistComponent} from './todolist/todolist.component';

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {}
