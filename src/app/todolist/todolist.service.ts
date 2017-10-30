import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {Item} from './item';


@Injectable()
export class TodolistService {

  private _items: Item[];
  private logger: LoggerService;
  private _http: HttpClient;

  constructor(logger: LoggerService, http: HttpClient) {
    this.logger = logger;
    this._http  = http;
    this._items = [];

    // example for fetching data from the server
    let headers = new HttpHeaders();
    headers     = headers.append('x', 'ttt');

    let params = new HttpParams();
    params     = params.append('f', 'ffff');

    // http.get<Item[]>('https://jsonplaceholder.typicode.com/todos', {headers, params})
    //     .subscribe(response => this._items = response);
  }

  public get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    // this.items.push(new Item(title));
    this._items = [...this.items, new Item(title)];
    this.logger.log('item added');
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.logger.log('item removed');
  }
}
