import {LoginComponent} from './login/login.component';
import {TodolistComponent} from './todolist/todolist.component';
import {HistoryComponent} from './history/history.component';

export const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list', component: TodolistComponent},
  {path: 'log', component: HistoryComponent},
];
