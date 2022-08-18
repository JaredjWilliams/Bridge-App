import { Component, OnInit } from '@angular/core';
import { Distribution } from '../distribution-class.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {
  
  get data():string { 
    return this.commonService.serviceData; 
  } 
  
  set data(value: string) { 
    this.commonService.serviceData = value; 
  } 
  
  arr: number[] = [];

  constructor(public commonService: CommonService) { }
  
  broadCastMessage(): void {
    this.commonService.broadCastMessage('Message from Pointscreen Component to App Component!');
  }

  removeMessages(): void {
    this.commonService.removeMessages();
  }

test() {
  this.distributions.forEach(element => {
    this.arr.push(element.suitCount)
  })
  console.log(this.arr)
}



  ngOnInit(): void {
  }

  distributions: Distribution[] = [
    new Distribution(0, 'assets/spades.png'),
    new Distribution(0, 'assets/hearts.png'),
    new Distribution(0, 'assets/diamonds.png'),
    new Distribution(0, 'assets/clubs.png')
  ]
}
