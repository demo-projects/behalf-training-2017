import {LoginComponent} from './login/login.component';
import {TodolistComponent} from './todolist/todolist.component';
import {HistoryComponent} from './history/history.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: TodolistComponent},
  {path: 'log', component: HistoryComponent},
];
