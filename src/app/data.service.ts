import { Injectable } from '@angular/core';
//To share data between components using RxJS BehaviorSubject library
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  //Creating an acceable Method from other component
  changeGoal(goal) {
    this.goals.next(goal);
  }
}
