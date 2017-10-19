import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    h1 {color: blue}
  `],
  template: `
    <h1 class="active">List</h1>

    <input type="text"
           #item
           placeholder="add item..">

    <button (click)="addItem(item.value)">add</button>

    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})

export class AppComponent {

  public items: string[];

  constructor() {
    this.items = [];
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public removeItem(item: string): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
