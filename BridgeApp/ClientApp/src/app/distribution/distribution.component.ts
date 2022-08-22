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

  get arr(): number[] {
    return this.commonService.arr
  }
  set arr(value: number[]) {
    this.commonService.arr = value
  }

  getDistributionPoints() {
    console.log(this.arr)
    let distributionPoints = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === 2) {
        distributionPoints++
        console.log(distributionPoints)
      } else if (this.arr[i] === 1) {
        distributionPoints =+ 3
        console.log(distributionPoints)
      } else if (this.arr[i] === 0) {
        distributionPoints =+ 5
        console.log(distributionPoints)
      }
    }
    return distributionPoints
  }

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
