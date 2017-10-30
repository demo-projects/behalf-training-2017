import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UpPipe} from './up.pipe';
import {LoggerService} from './logger.service';
import { CountByPipe } from './count-by.pipe';
import { IfDirective } from './if.directive';
import { MarkerDirective } from './marker.directive';
import { KeydownDirective } from './keydown.directive';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe, CountByPipe, IfDirective, MarkerDirective, KeydownDirective, TabsComponent, TabComponent],
  exports     : [TabComponent, TabsComponent, UpPipe, CountByPipe, IfDirective, MarkerDirective, KeydownDirective],
  providers   : [LoggerService]
})
export class UtilsModule {
}
