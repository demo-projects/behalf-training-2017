import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <h2>Log</h2>
    <table>
      <thead>
          <tr>
            <th>date</th>
            <th>event</th>
            <th>item</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>12/12/12</td>
            <td>add</td>
            <td>title</td>
          </tr>
      </tbody>

    </table>
  `,
  styles: []
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
