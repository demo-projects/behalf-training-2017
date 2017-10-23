import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TodolistComponent} from './todolist.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [TodolistComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
