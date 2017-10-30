import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recover',
  template: `
    <form>
      <input type="text"
             placeholder="Enter your email">
      <button type="submit">submit</button>
    </form>
  `,
  styles  : []
})
export class RecoverComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
