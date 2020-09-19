import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieServiceService } from '../movie-service.service';

enum MovieTypes {
  Popular = 0,
  TopRated = 1,
  Upcoming = 2,
  Genre = 3
}

@Component({
  selector: 'app-karros-main',
  templateUrl: './karros-main.component.html',
  styleUrls: ['./karros-main.component.scss']
})

export class KarrosMainComponent implements OnInit {

  getMoviesSubscriber: Subscription;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.getMoviesSubscriber.closed) {
      if (event.target.scrollingElement.scrollTop / event.target.scrollingElement.scrollHeight >= 0.5) {
        if (this.response.page < this.response.total_pages) {
          this.getMovies(this.selectedMode, this.response.page + 1);
        }
      }
    }
  }
  movies = [];
  response: any

  selectedMode: MovieTypes;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies(MovieTypes.Popular);
  }

  getMovies(type: MovieTypes, page?: number) {
    if (this.selectedMode != type) {
      this.selectedMode = type;
      this.movies = [];
    }
    switch (type) {
      case MovieTypes.TopRated:
        this.getMoviesTopRated(page);
        break;
      case MovieTypes.Upcoming:
        this.getMoviesUpcoming(page);
        break;
      case MovieTypes.Genre:
        this.getGenre();
        break;
      default: this.getMoviesPopular(page);
        break;
    }
  }

  getMoviesPopular(page?: number) {
    this.getMoviesSubscriber = this.movieService.getMoviesPopular(page).subscribe(res => {
      console.log(res);
      this.processResponseMovies(res);
    })
  }

  getMoviesTopRated(page?: number) {
    this.getMoviesSubscriber = this.movieService.getMoviesTopRated(page).subscribe(res => {
      console.log(res);
      this.processResponseMovies(res);
    })
  }

  getMoviesUpcoming(page?: number) {
    this.getMoviesSubscriber = this.movieService.getMoviesUpcoming(page).subscribe(res => {
      console.log(res);
      this.processResponseMovies(res);
    })
  }

  getGenre() {
    this.getMoviesSubscriber = this.movieService.getGenre().subscribe(res => {
      console.log(res);
      this.processResponseMovies(res);
    })
  }

  processResponseMovies(res) {
    this.response = res;
    res.results.forEach(m => {
      this.movies.push(m);
    });
  }
}
