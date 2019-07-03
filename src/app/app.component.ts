import { Component } from '@angular/core';

import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  constructor(public app: AppService) { }
  send(value: string) {
    this.app.name$.next(value);
  }
}
