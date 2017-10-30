import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UpPipe} from './up.pipe';
import {LoggerService} from './logger.service';
import { CountByPipe } from './count-by.pipe';
import { IfDirective } from './if.directive';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe, CountByPipe, IfDirective],
  exports     : [UpPipe, CountByPipe, IfDirective],
  providers   : [LoggerService]
})
export class UtilsModule {
}
