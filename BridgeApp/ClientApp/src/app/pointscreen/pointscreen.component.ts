import { Component, OnInit } from '@angular/core';
import { Cardsclass } from '../cardsclass.model';

@Component({
  selector: 'app-pointscreen',
  templateUrl: './pointscreen.component.html',
  styleUrls: ['./pointscreen.component.css']
})
export class PointscreenComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  cards: Cardsclass[] = [
    new Cardsclass('assets/clubs.png', '10 ', 0),
    new Cardsclass('assets/clubs.png', 'J ', 1),
    new Cardsclass('assets/clubs.png', 'Q ', 2),
    new Cardsclass('assets/clubs.png', 'K ', 3),
    new Cardsclass('assets/clubs.png', 'A ', 4),
    new Cardsclass('assets/diamonds.png', '10 ', 0),
    new Cardsclass('assets/diamonds.png', 'J ', 1),
    new Cardsclass('assets/diamonds.png', 'Q ', 2),
    new Cardsclass('assets/diamonds.png', 'K ', 3),
    new Cardsclass('assets/diamonds.png', 'A ', 4),
    new Cardsclass('assets/hearts.png', '10 ', 0),
    new Cardsclass('assets/hearts.png', 'J ', 1),
    new Cardsclass('assets/hearts.png', 'Q ', 2),
    new Cardsclass('assets/hearts.png', 'K ', 3),
    new Cardsclass('assets/hearts.png', 'A ', 4),
    new Cardsclass('assets/spades.png', '10 ', 0),
    new Cardsclass('assets/spades.png', 'J ', 1),
    new Cardsclass('assets/spades.png', 'Q ', 2),
    new Cardsclass('assets/spades.png', 'K ', 3),
    new Cardsclass('assets/spades.png', 'A ', 4),
  ]
}
