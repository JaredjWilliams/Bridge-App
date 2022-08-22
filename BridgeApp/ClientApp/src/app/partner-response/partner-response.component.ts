import { Component, OnInit } from '@angular/core';
import { Bid } from '../bidclass.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-partner-response',
  templateUrl: './partner-response.component.html',
  styleUrls: ['./partner-response.component.css']
})
export class PartnerResponseComponent implements OnInit {

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
    this.commonService.shownBids = value
  }

  get userBid(): Bid {
    return this.commonService.userBid
  }

  set userBid(value: Bid) {
    this.commonService.userBid = value
  }

  get partnerBid(): Bid {
    return this.commonService.partnerBid
  }

  set partnerBid(value: Bid) {
    this.commonService.partnerBid = value
  }
  

  test() {
    console.log(this.userBid)
  }

  selectBid(bids: Bid) {
    this.partnerBid = bids
    console.log(this.partnerBid)
  }
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
