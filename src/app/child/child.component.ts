import { Component, OnInit, Input } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs'
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() type: string;
  list: string[] = [];
  destroy$ = new Subject();
  constructor(public app: AppService) { }
  obs: Observable<string>;
  name = "";
  ngOnInit() {
    this.obs = this.app.Name(this.type);
    this.start()
  }
  start() {
    if (this.obs) {

      this.obs
        .pipe(map(res => {
          console.log(res);
          this.list.push(res);
        })).subscribe();
    }
  }
  stop() {

  }

}