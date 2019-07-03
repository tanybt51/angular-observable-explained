import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs'
@Injectable()
export class AppService {

 public name$ = new BehaviorSubject<string>('first');
  constructor() {


  }
  public setName(val: string) {
    this.name$.next(val);
  }
  public get Name():Observable<string>{
    return this.name$.asObservable();
  }

}