import { Component, OnInit } from '@angular/core';
import { Distribution } from '../distribution-class.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  constructor() { }
  
test() {
  this.distributions.forEach(element => {
    console.log(element.getSuitCount())
  });
}




  ngOnInit(): void {
  }

  distributions: Distribution[] = [
    new Distribution(0, 'assets/spades.png'),
    new Distribution(0, 'assets/hearts.png'),
    new Distribution(0, 'assets/diamonds.png'),
    new Distribution(0, 'assets/clubs.png')
  ]
}
