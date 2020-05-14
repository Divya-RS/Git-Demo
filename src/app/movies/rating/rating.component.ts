import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  range = [1, 2, 3, 4, 5];
  @Input() rate: number;

  constructor() { }

  ngOnInit(): void {
  }

}
