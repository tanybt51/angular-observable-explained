import { Component, OnInit, Input } from '@angular/core';
import { map,takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { AppService } from '../app.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  destroy$ = new Subject();
  constructor(public app: AppService) { }
  name = '';
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