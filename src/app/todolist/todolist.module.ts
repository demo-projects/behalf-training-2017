import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TodolistComponent} from './todolist.component';
import { TodolistHeaderComponent } from './todolist-header.component';
import { TodolistMainComponent } from './todolist-main.component';
import { TodolistListComponent } from './todolist-list.component';
import { TodolistFooterComponent } from './todolist-footer.component';
import { TodolistItemComponent } from './todolist-item.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [TodolistComponent, TodolistHeaderComponent, TodolistMainComponent, TodolistListComponent, TodolistFooterComponent, TodolistItemComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
