import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  serviceData!: string;
  
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

