import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieBookingService {
  movies: any = [];
  selectedMovie: any;
  selectedDate: any;
  selectedTime: any;
  selectedTheater: any;
  totalPrice: any = 0;
  seats = 2;
  selectedLocation: any;
  crtLocation = 'Bengaluru';

  constructor(private http: HttpClient) {
   }
  getUsers() {
    return this.http.get('assets/jsons/Registrations.json');
  }
  getMovies() {
    return this.http.get('assets/jsons/Movies.json');
  }
  updateMovies(location) {
    this.movies = this.movies.filter(movie => movie.location.includes(location));
    console.log('...movies updated in service class', this.movies);
  }
  getMovieDetails() {
    switch (this.crtLocation){
      case 'Bengaluru':
        return this.http.get('assets/jsons/Bengaluru-Theatre.json');
        break;
      case 'Chennai':
        return this.http.get('assets/jsons/Chennai-Theatre.json');
        break;
      case 'Chandigarh':
        return this.http.get('assets/jsons/Chandigarh-Theatre.json');
        break;
    }
  }
}
