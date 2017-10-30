import {Item} from './item';
import {LoggerService} from '../utils/logger.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodolistService {
  private _items: Item[];
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    this.items.push(new Item(title));
    // this._items = [...this.items, new Item(title)];
    this.logger.log('item added');
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.logger.log('item removed');
  }
}
