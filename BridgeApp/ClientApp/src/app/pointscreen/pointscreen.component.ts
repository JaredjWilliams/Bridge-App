import { Component, OnInit } from '@angular/core';
import { Card } from '../cardsclass.model';
import { ActivatedRoute } from '@angular/router';
import { DistributionComponent } from '../distribution/distribution.component';

@Component({
  selector: 'app-pointscreen',
  templateUrl: './pointscreen.component.html',
  styleUrls: ['./pointscreen.component.css']
})
export class PointscreenComponent implements OnInit {
 
  totalPoints = 0;

  getTotalPoints(card:Card) {
    this.totalPoints += card.getPointCount()
  }

  ngOnInit(): void {
  }
  cards: Card[] = [
    new Card('assets/clubs.png', '10 ', 0, 'tenclubs'),
    new Card('assets/clubs.png', 'J ', 1, 'jackclubs'),
    new Card('assets/clubs.png', 'Q ', 2, 'queenclubs'),
    new Card('assets/clubs.png', 'K ', 3, 'kingclubs'),
    new Card('assets/clubs.png', 'A ', 4, 'aceclubs'),
    new Card('assets/diamonds.png', '10 ', 0, 'tendiamonds'),
    new Card('assets/diamonds.png', 'J ', 1, 'jackdiamonds'),
    new Card('assets/diamonds.png', 'Q ', 2, 'queendiamonds'),
    new Card('assets/diamonds.png', 'K ', 3, 'kingdiamonds'),
    new Card('assets/diamonds.png', 'A ', 4, 'acediamonds'),
    new Card('assets/hearts.png', '10 ', 0, 'tenhearts'),
    new Card('assets/hearts.png', 'J ', 1, 'jackhearts'),
    new Card('assets/hearts.png', 'Q ', 2, 'queenhearts'),
    new Card('assets/hearts.png', 'K ', 3, 'kinghearts'),
    new Card('assets/hearts.png', 'A ', 4, 'acehearts'),
    new Card('assets/spades.png', '10 ',0, 'tenspades'),
    new Card('assets/spades.png', 'J ', 1, 'jackspades'),
    new Card('assets/spades.png', 'Q ', 2, 'queenspades'),
    new Card('assets/spades.png', 'K ', 3, 'kingspades'),
    new Card('assets/spades.png', 'A ', 4, 'acespades'),
  ]
}
function getPointCount() {
  throw new Error('Function not implemented.');
}

