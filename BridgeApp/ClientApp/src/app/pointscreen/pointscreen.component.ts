import { Component, OnInit } from '@angular/core';
import { Card } from '../cardsclass.model';

@Component({
  selector: 'app-pointscreen',
  templateUrl: './pointscreen.component.html',
  styleUrls: ['./pointscreen.component.css']
})
export class PointscreenComponent implements OnInit {

  constructor() { }
  totalPoints = 0;
  getTotalPoints(card:Card) {
    this.totalPoints += card.getPointCount()
  }

  ngOnInit(): void {
  }
  cards: Card[] = [
    new Card('assets/clubs.png', '10 ', 0),
    new Card('assets/clubs.png', 'J ', 1),
    new Card('assets/clubs.png', 'Q ', 2),
    new Card('assets/clubs.png', 'K ', 3),
    new Card('assets/clubs.png', 'A ', 4),
    new Card('assets/diamonds.png', '10 ', 0),
    new Card('assets/diamonds.png', 'J ', 1),
    new Card('assets/diamonds.png', 'Q ', 2),
    new Card('assets/diamonds.png', 'K ', 3),
    new Card('assets/diamonds.png', 'A ', 4),
    new Card('assets/hearts.png', '10 ', 0),
    new Card('assets/hearts.png', 'J ', 1),
    new Card('assets/hearts.png', 'Q ', 2),
    new Card('assets/hearts.png', 'K ', 3),
    new Card('assets/hearts.png', 'A ', 4),
    new Card('assets/spades.png', '10 ', 0),
    new Card('assets/spades.png', 'J ', 1),
    new Card('assets/spades.png', 'Q ', 2),
    new Card('assets/spades.png', 'K ', 3),
    new Card('assets/spades.png', 'A ', 4),
  ]
}
function getPointCount() {
  throw new Error('Function not implemented.');
}

