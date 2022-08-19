import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  clubs!: number;
  diamonds!: number;
  hearts!: number;
  spades!: number;
  totalPoints = 0;



  
  private subject = new Subject();

  broadCastMessage(message: string) {
    this.subject.next({ text: message });
  }

  removeMessages() {
    this.subject.next(null);
  }

  retriveMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}

