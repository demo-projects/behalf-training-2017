import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UpPipe} from './up.pipe';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe],
  exports     : [UpPipe]
})
export class UtilsModule {
}
