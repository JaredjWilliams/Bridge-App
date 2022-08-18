import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from './common.service';
import { Distribution } from './distribution-class.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  chat!: string;
  subcription: Subscription;

  constructor(private commonService: CommonService) {
    this.subcription = this.commonService.retriveMessage().subscribe(message => {
      if (message) {
        this.chat = message;
        console.log(this.chat)
      } else {
        this.chat = 'none';
      }
    });
  }

  
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
