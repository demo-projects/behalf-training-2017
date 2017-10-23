import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UpPipe} from './up.pipe';
import {LoggerService} from './logger.service';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe],
  exports     : [UpPipe],
  providers   : [LoggerService]
})
export class UtilsModule {
}
