import { Component, OnInit, Input } from '@angular/core';
import { map,takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  destroy$ = new Subject();
  constructor(public app: AppService) { }
  name = "";
   ngOnInit() {
    this.start()
  }
  start(){
this.app.Name.pipe(
      map((val: string) => {
        this.name = val;
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
  stop(){
    this.destroy$.next();
  }

}