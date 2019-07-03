import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import {AppService} from '../app.service';
import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public app:AppService) { }
  name = '';
   ngOnInit() {
    this.app.Name.pipe(
      switchMap((val: string) => {
        this.name = val;
        return val;
      })
    ).subscribe();
  }

}