import {Component, ViewChild, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TabComponent} from './utils/tab.component';
import {TabsComponent} from './utils/tabs.component';

@Component({
  selector: 'app-root',
  template: `
    <h1 #title
        appMarker="red">Hello Directives</h1>

    <app-tabs></app-tabs>

  `
})

export class AppComponent implements OnInit {

  @ViewChild('title')
  public title: ElementRef;

  @ViewChild(TabsComponent)
  public tabs;

  constructor(private R: Renderer2) {}

  ngOnInit(): void {
    this.tabs.next();
    this.R.listen(this.title.nativeElement, 'mouseenter', () => {
      this.R.setStyle(this.title.nativeElement, 'backgroundColor', 'red');
    });
  }
}
