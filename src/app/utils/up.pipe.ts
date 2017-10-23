import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'up'
})
export class UpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
