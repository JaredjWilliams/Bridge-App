import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bid } from './bidclass.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  clubs!: number;
  diamonds!: number;
  hearts!: number;
  spades!: number;
  totalPoints = 0;
  arr: number [] = [this.clubs];
  identifierArr: string [] =[];

  opened: boolean = false;
  controlFirstBid: boolean = true;
  controlSecondBid: boolean = false;

  userBid!: Bid;
  partnerBid!: Bid;
  shownBids: Bid[] = [
    new Bid('','','',''),
    new Bid('','','',''),
    new Bid('','','',''),
    new Bid('','','',''),
  ]
  bids: Bid[] = [
    new Bid('oneClub', 'assets/clubs.png', '1' , 'This indicates a hand of 13-15 points and no biddable suit. It is asking the partner for their best 4 or 5 card suit.'),
    new Bid('oneDiamond', 'assets/diamonds.png', '1' , 'This indiactes at least 4 diamonds, no 5 card major and opening count. This bid is asking the partner for their best 5 card major.'),
    new Bid('oneHeart', 'assets/hearts.png', '1' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('oneSpade', 'assets/spades.png', '1' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('oneNT','NT', '1 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('twoClub','assets/clubs.png', '2', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('twoDiamond','assets/diamonds.png', '2', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('twoHeart','assets/hearts.png', '2' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('twoSpade','assets/spades.png', '2' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('twoNT','NT', '2 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('threeClub','assets/clubs.png', '3', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('threeDiamond','assets/diamonds.png', '3', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('threeHeart','assets/hearts.png', '3' , 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('threeSpade','assets/spades.png', '3' , 'This indicates opening count and a 5 card major in spades.'),
    new Bid('threeNT','NT', '3 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('fourClub','assets/clubs.png', '4', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('fourDiamond','assets/diamonds.png', '4', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('fourHeart','assets/hearts.png', '4', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('fourSpade','assets/spades.png', '4', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('fourNT','NT', '4 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('fiveClub','assets/clubs.png', '5', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('fiveDiamond','assets/diamonds.png', '5', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('fiveHeart','assets/hearts.png', '5', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('fiveSpade','assets/spades.png', '5', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('fiveNT','NT', '5 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('sixClub','assets/clubs.png', '6', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('sixDiamond','assets/diamonds.png', '6', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('sixHeart','assets/hearts.png', '6', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('sixSpade','assets/spades.png', '6', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('sixNT','NT', '6 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('sevenClub','assets/clubs.png', '7', 'If first bid: indicates a hand of 24 or more points' ),
    new Bid('sevenDiamond','assets/diamonds.png', '7', 'adfjlakdjf;laksdjfalksdjf' ),
    new Bid('sevenHeart','assets/hearts.png', '7', 'This indicates opening count and a 5 card major in hearts.'),
    new Bid('sevenSpade','assets/spades.png', '7', 'This indicates opening count and a 5 card major in spades.'),
    new Bid('sevenNT','', '7 NT', 'This bid indicates a point count of 15-17 points, even distribution, and is asking for the partners best suit.'),
    new Bid('Pass','', 'Pass', 'meaning'),
    new Bid('takeOutDouble','', 'X', 'meaning'),
    new Bid('Redouble','', 'XX', 'meaning'),
    new Bid('noAlt', '', '', 'The bid(s) shown is/are the optimal bid(s).')
  ]
  passIndex = this.bids.findIndex((b: Bid) => b.identifier == 'Pass')
  noAltIndex = this.bids.findIndex((b: Bid) => b.identifier == 'noAlt');

  findFirstBid(controlFirstBid: boolean) {
  if(controlFirstBid === true){
    if (this.totalPoints < 12) {
      this.shownBids[0] = this.bids[this.passIndex];
      this.shownBids[1] = this.bids[this.passIndex];
      this.shownBids[2] = this.bids[this.passIndex];
      this.shownBids[3] = this.bids[this.passIndex];
      this.controlFirstBid = false;
      console.log(this.controlFirstBid)
      this.controlSecondBid = true;
      console.log(this.controlSecondBid)
    } else if (this.totalPoints > 12 && this.totalPoints < 15) {
      if (this.spades < 5 && this.hearts < 5 && this.clubs <= 3 && this.diamonds <= 3) {
        this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneClub')];
        this.shownBids[1] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneDiamond')];
        this.shownBids[2] = this.bids[this.noAltIndex];
        this.shownBids[3] = this.bids[this.noAltIndex];
        this.controlFirstBid = false;
        this.controlSecondBid = true
        this.opened = true;
      } else if (this.spades < 5 && this.hearts < 5 && this.clubs == 4 && this.diamonds == 4) {
        this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneDiamond')];
        this.shownBids[1] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneClub')];
        this.shownBids[2] = this.bids[this.noAltIndex];
        this.shownBids[3] = this.bids[this.noAltIndex];
        this.controlFirstBid = false;
        this.controlSecondBid = true;
        this.opened = true;
      } else if (this.spades > this.hearts) {
        if (this.spades == 5) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneSpade')];
        } else if (this.spades == 6) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'twoSpade')];
        } else if (this.spades == 7) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'threeSpade')];
        } else if (this.spades >= 8) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'fourSpade')];
        }
        this.shownBids[1] = this.bids[this.noAltIndex];
        this.shownBids[2] = this.bids[this.noAltIndex];
        this.shownBids[3] = this.bids[this.noAltIndex];
        this.controlFirstBid = false;
        this.controlSecondBid = true;
        this.opened = true;
      } else if (this.hearts > this.spades) {
        if (this.hearts == 5) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneHeart')];
        } else if (this.hearts == 6) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'twoHeart')];
        } else if (this.hearts == 7) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'threeHeart')];
        } else if (this.hearts >= 8) {
          this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'fourHeart')];
        }
        this.shownBids[1] = this.bids[this.noAltIndex];
        this.shownBids[2] = this.bids[this.noAltIndex];
        this.shownBids[3] = this.bids[this.noAltIndex];
        this.controlFirstBid = false;
        this.controlSecondBid = true;
        this.opened = true;
      }
    } else if (this.totalPoints > 15 && this.totalPoints < 26) {
      if (this.totalPoints > 15 && this.totalPoints < 18) {
        this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'oneNT')];
      } else if (this.totalPoints > 18 && this.totalPoints < 21) {
      this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'twoClub')];
      } else if (this.totalPoints > 21 && this.totalPoints < 23) {
      this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'twoNT')];
      } else if (this.totalPoints > 23) {
      this.shownBids[0] = this.bids[this.bids.findIndex((b: Bid) => b.identifier == 'threeNT')];
      }
      this.shownBids[1] = this.bids[this.noAltIndex];
      this.shownBids[2] = this.bids[this.noAltIndex];
      this.shownBids[3] = this.bids[this.noAltIndex];
      this.controlFirstBid = false;
      this.controlSecondBid = true;
      this.opened = true;
    } 
  }
}

getDistributionPoints() {
  let distributionPoints = 0;
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] === 2) {
      distributionPoints++
    } else if (this.arr[i] === 1) {
      distributionPoints =+ 3
    } else if (this.arr[i] === 0) {
      distributionPoints =+ 5
    }
  }
  return distributionPoints

}

// findSecondBid(controlSecondBid: boolean) {
//   this.totalPoints =+ this.getDistributionPoints();
//   if (controlSecondBid === true) {
//     if (this.opened === true) {
//       if (this.partnerBid.identifier == 'Pass') {
//         if(total)
//       }
//     } else if (this.opened === false) {

//     }
//   }
// }


  
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

