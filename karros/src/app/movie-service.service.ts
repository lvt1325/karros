import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiKey = 'a7b3c9975791294647265c71224a88ad';
  constructor(private http: HttpClient) { }

  getMoviesPopular(page?: number){
    ///movie/popular
    let command = `api_key=${this.apiKey}`;
    if (page) {
      command += `&page=${page}`;
    }
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?${command}`);
  }

  getMoviesTopRated(page?: number){
    ///movie/top_rated
    let command = `api_key=${this.apiKey}`;
    if (page) {
      command += `&page=${page}`;
    }
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?${command}`);
  }

  getMoviesUpcoming(page?: number){
    ///movie/upcoming
    let command = `api_key=${this.apiKey}`;
    if (page) {
      command += `&page=${page}`;
    }
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?${command}`);
  }

  getGenre(){
    ///genre/movie/list
    let command = `api_key=${this.apiKey}`;
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?${command}`);
  }

}
