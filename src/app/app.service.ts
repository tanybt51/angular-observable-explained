import { Injectable } from '@angular/core';
import { Observable,Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs'
@Injectable()
export class AppService {

  public behaviorSubject$ = new BehaviorSubject<string>('first');
  public replaySubject$ = new ReplaySubject<string>(3);
  public asyncSubject$ = new AsyncSubject<string>();
  public subject$ = new Subject<string>();
  constructor() {


  }
  public setName(val: string) {
    this.behaviorSubject$.next(val);
    this.replaySubject$.next(val);
    this.asyncSubject$.next(val);
    this.subject$.next(val);
  }
  public Name(type: string): Observable<string> {
    let observable:Observable<string>;
    switch (type) {
      case 'behavior':
      observable = this.behaviorSubject$.asObservable();
        break;
      case 'replay':
      observable = this.replaySubject$.asObservable();
        break;
      case 'async':
      observable = this.asyncSubject$.asObservable();
        break;
      default:
      observable = this.subject$.asObservable();
        break;

    }
        return observable;
    
  }

}