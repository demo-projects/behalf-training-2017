import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  log(msg) {
    console.log(msg);
  }

}
