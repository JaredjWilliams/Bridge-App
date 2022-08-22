import { Component, OnInit } from '@angular/core';
import { Card } from '../cardsclass.model';
import { ActivatedRoute } from '@angular/router';
import { DistributionComponent } from '../distribution/distribution.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-pointscreen',
  templateUrl: './pointscreen.component.html',
  styleUrls: ['./pointscreen.component.css']
})
export class PointscreenComponent implements OnInit {

  get identifierArr(): string[] {
    return this.commonService.identifierArr
  }

  set identifierArr(value: string[]) {
    this.commonService.identifierArr = value
  }
 
  get totalPoints():number { 
    return this.commonService.totalPoints; 
  } 
    
  set totalPoints(value: number) { 
    this.commonService.totalPoints = value; 
  } 

  removeId(card: Card) {
    let index = this.identifierArr.findIndex(d => d === card.identifier);
    this.identifierArr.splice(index, 1)
  }


  getPointsAndId(card:Card) {
    if (card.clicked === false) {
      this.totalPoints += card.getPointCount()
      this.identifierArr.push(card.identifier);
      console.log(this.identifierArr);
      card.clicked = true;
    } else {
      this.totalPoints -= card.getPointCount()
      this.removeId(card);
      console.log(this.identifierArr);
      card.clicked = false;
    }
  }

  test() {
    console.log(this.totalPoints)
  }

  constructor(public commonService: CommonService) { }

  ngOnInit(): void { }

  cards: Card[] = [
    new Card('assets/clubs.png', '10 ', 0, 'tenclubs', false),
    new Card('assets/clubs.png', 'J ', 1, 'jackclubs', false),
    new Card('assets/clubs.png', 'Q ', 2, 'queenclubs', false),
    new Card('assets/clubs.png', 'K ', 3, 'kingclubs', false),
    new Card('assets/clubs.png', 'A ', 4, 'aceclubs', false),
    new Card('assets/diamonds.png', '10 ', 0, 'tendiamonds', false),
    new Card('assets/diamonds.png', 'J ', 1, 'jackdiamonds', false),
    new Card('assets/diamonds.png', 'Q ', 2, 'queendiamonds', false),
    new Card('assets/diamonds.png', 'K ', 3, 'kingdiamonds', false),
    new Card('assets/diamonds.png', 'A ', 4, 'acediamonds', false),
    new Card('assets/hearts.png', '10 ', 0, 'tenhearts', false),
    new Card('assets/hearts.png', 'J ', 1, 'jackhearts', false),
    new Card('assets/hearts.png', 'Q ', 2, 'queenhearts', false),
    new Card('assets/hearts.png', 'K ', 3, 'kinghearts', false),
    new Card('assets/hearts.png', 'A ', 4, 'acehearts', false),
    new Card('assets/spades.png', '10 ',0, 'tenspades', false),
    new Card('assets/spades.png', 'J ', 1, 'jackspades', false),
    new Card('assets/spades.png', 'Q ', 2, 'queenspades', false),
    new Card('assets/spades.png', 'K ', 3, 'kingspades', false),
    new Card('assets/spades.png', 'A ', 4, 'acespades', false),
  ]
}
function getPointCount() {
  throw new Error('Function not implemented.');
}

