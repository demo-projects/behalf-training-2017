import {Item} from './item';

export class TodolistService {
  private _items: Item[];

  constructor() {
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    this.items.push(new Item(title));
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
