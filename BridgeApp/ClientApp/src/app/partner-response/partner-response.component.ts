import { Component, OnInit } from '@angular/core';
import { Bidclass } from '../bidclass.model';

@Component({
  selector: 'app-partner-response',
  templateUrl: './partner-response.component.html',
  styleUrls: ['./partner-response.component.css']
})
export class PartnerResponseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bids: Bidclass[] = [
    new Bidclass('assets/clubs.png', 1 , 'This indicates a hand of 13-15 points and no biddable suit. It is asking the partner for their best 4 or 5 card suit.'),
    new Bidclass('assets/diamonds.png', 1 , 'This indiactes at least 4 diamonds, no 5 card major and opening count. This bid is asking the partner for their best 5 card major.'),
    new Bidclass('assets/hearts.png', 1 , 'This indicates opening count and a 5 card major in hearts.'),
    new Bidclass('assets/spades.png', 1 , 'This indicates opening count and a 5 card major in spades.'),
    new Bidclass('NT', 1, 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.')
  ]
}
