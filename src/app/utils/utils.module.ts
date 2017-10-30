import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UpPipe} from './up.pipe';
import {LoggerService} from './logger.service';
import { CountByPipe } from './count-by.pipe';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe, CountByPipe],
  exports     : [UpPipe, CountByPipe],
  providers   : [LoggerService]
})
export class UtilsModule {
}
