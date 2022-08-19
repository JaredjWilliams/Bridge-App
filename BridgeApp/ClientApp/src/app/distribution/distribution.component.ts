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
  
  get clubs():number { 
    return this.commonService.clubs; 
  } 
  
  set clubs(value: number) { 
    this.commonService.clubs = value; 
  } 

  get diamonds():number { 
    return this.commonService.diamonds; 
  } 
  
  set diamonds(value: number) { 
    this.commonService.diamonds = value; 
  } 

  get hearts():number { 
    return this.commonService.hearts; 
  } 
  
  set hearts(value: number) { 
    this.commonService.hearts = value; 
  } 

  get spades():number { 
    return this.commonService.spades; 
  } 
  
  set spades(value: number) { 
    this.commonService.spades = value; 
  } 

  arr: number[] = [];

  constructor(public commonService: CommonService) { }
  
  broadCastMessage(): void {
    this.commonService.broadCastMessage('Message from Pointscreen Component to App Component!');
  }

  removeMessages(): void {
    this.commonService.removeMessages();
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
