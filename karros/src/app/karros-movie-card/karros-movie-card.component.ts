import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karros-movie-card',
  templateUrl: './karros-movie-card.component.html',
  styleUrls: ['./karros-movie-card.component.scss']
})
export class KarrosMovieCardComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
