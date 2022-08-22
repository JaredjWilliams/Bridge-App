import { Component, Input, OnInit } from '@angular/core';
import { findIndex, Subscription } from 'rxjs';
import { Bid } from '../bidclass.model';
import { CommonService } from '../common.service';
import { Distribution } from '../distribution-class.model';

@Component({
  selector: 'app-bidscreen',
  templateUrl: './bidscreen.component.html',
  styleUrls: ['./bidscreen.component.css']
})
export class BidscreenComponent implements OnInit {
 
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

  get totalPoints():number { 
    return this.commonService.totalPoints; 
  } 
  set totalPoints(value: number) { 
    this.commonService.totalPoints = value; 
  } 

  get arr(): number[] {
    return this.commonService.arr
  }
  set arr(value: number[]) {
    this.commonService.arr = value
  }

  get bids(): Bid[] {
    return this.commonService.bids
  }
  set bids(value: Bid[]) {
    this.commonService.bids = value
  }

  get shownBids(): Bid[] {
    return this.commonService.shownBids
  }
  set shownBids(value: Bid[]) {
    this.commonService.bids = value
  }

  get userBid(): Bid {
    return this.commonService.userBid
  }
  set userBid(value: Bid) {
    this.commonService.userBid = value
  }

  get controlFirstBid() {
    return this.commonService.controlFirstBid
  }
  
  get findFirstBid() {
    return this.commonService.findFirstBid(this.controlFirstBid)
  }


  constructor(public commonService: CommonService) { } 
  

  ngOnInit() {
    this.findFirstBid

  }

  chosenBid(bid: Bid) {
    this.userBid = bid
    console.log(this.userBid)
  }

  test() {

   this.shownBids.forEach(element => {
    console.log(element)
    
   });
   console.log('ditribution: ' + this.arr)
   console.log('number of hearts: ' + this.hearts)
  }
  

 


}

