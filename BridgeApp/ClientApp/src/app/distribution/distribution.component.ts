import { Component, OnInit } from '@angular/core';
import { DistributionClass } from '../distribution-class.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  constructor() { }
  
  spades = 0;
  hearts = 0;
  diamonds = 0;
  clubs = 0;

  increment() {
    this.spades += 1
    return this.spades;
  }
  decrement() {
    this. spades-= 1;
    return this.spades;
  }

  ngOnInit(): void {
  }

  distributions: DistributionClass[] = [
    new DistributionClass(0, 'assets/spades.png'),
    new DistributionClass(0, 'assets/hearts.png'),
    new DistributionClass(0, 'assets/diamonds.png'),
    new DistributionClass(0, 'assets/clubs.png')
  ]
}
