import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bid } from '../bidclass.model';
import { CommonService } from '../common.service';
import { Distribution } from '../distribution-class.model';

@Component({
  selector: 'app-bidscreen',
  templateUrl: './bidscreen.component.html',
  styleUrls: ['./bidscreen.component.css']
})
export class BidscreenComponent implements OnInit {
 
  get data():string {
    return this.commonService.serviceData; 
  }

  set data(value: string) { 
    this.commonService.serviceData = value; 
  }

  constructor(public commonService: CommonService) { } 
  
  ngOnInit(): void {
  }
  test() {
   
  }
  
  distributions: Distribution[] = [
    new Distribution(0, 'assets/spades.png'),
    new Distribution(0, 'assets/hearts.png'),
    new Distribution(0, 'assets/diamonds.png'),
    new Distribution(0, 'assets/clubs.png')
  ]

  bids: Bid[] = [
    new Bid('assets/clubs.png', '1' , 'This indicates a hand of 13-15 points and no biddable suit. It is asking the partner for their best 4 or 5 card suit.'),
    new Bid('assets/diamonds.png', '1' , 'This indiactes at least 4 diamonds, no 5 card major and opening count. This bid is asking the partner for their best 5 card major.'),
    new Bid('assets/hearts.png', '1' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '1' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '1 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '2', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '2', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '2' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '2' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '2 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '3', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '3', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '3' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '3' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '3 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '4', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '4', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '4', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '4', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '4 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '5', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '5', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '5', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '5', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '5 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '6', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '6', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '6', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '6', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '6 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('assets/clubs.png', '7', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('assets/diamonds.png', '7', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('assets/hearts.png', '7', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('assets/spades.png', '7', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('NT', '7 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
  ]
}

