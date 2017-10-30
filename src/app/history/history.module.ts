import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import {TodolistModule} from '../todolist/todolist.module';

@NgModule({
  imports: [
    CommonModule,
    TodolistModule
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent]
})
export class HistoryModule { }
