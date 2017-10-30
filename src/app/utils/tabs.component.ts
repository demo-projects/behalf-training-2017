import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div>
      <ul>
        <li (click)="next()">next</li>
        <li>previous</li>
      </ul>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;


  ngAfterContentInit(): void {
    console.log(this.tabs);
  }

  next() {
    console.log('next');
  }
}
