import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators'
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(public app: AppService) { }
  name = "";
   ngOnInit() {
    this.app.Name.pipe(
      switchMap((val: string) => {
        this.name = val;
        return val;
      })
    ).subscribe();
  }

}