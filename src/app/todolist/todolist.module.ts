import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {UtilsModule} from '../utils/utils.module';
import {TodolistFooterComponent} from './todolist-footer.component';
import {TodolistHeaderComponent} from './todolist-header.component';
import {TodolistItemComponent} from './todolist-item.component';
import {TodolistListComponent} from './todolist-list.component';
import {TodolistMainComponent} from './todolist-main.component';
import {TodolistComponent} from './todolist.component';
import {StoreModule} from '../store/store.module';

@NgModule({
  imports     : [CommonModule, UtilsModule, HttpClientModule, StoreModule],
  declarations: [
    TodolistComponent,
    TodolistHeaderComponent,
    TodolistMainComponent,
    TodolistListComponent,
    TodolistFooterComponent,
    TodolistItemComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {

  constructor() {

  }
}
