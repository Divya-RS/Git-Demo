import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from './movie-booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Movie Ticket Booking';
  loginTitle = 'Login';
  username = sessionStorage.getItem('username');
  location = 'Select a location';
  movies: any;
  constructor(private router: Router, private bookingService: MovieBookingService) {
    this.bookingService.crtLocation = 'Bengaluru';
  }

  ngOnInit() {
    this.bookingService.getMovies().subscribe
      (movies => this.movies = movies);
  }

  login() {
    const value = document.getElementById('login').innerHTML;
    if (value === 'Logout') {
      sessionStorage.clear();
      document.getElementById('login').innerHTML = 'Login';
      document.getElementById('welcome').style.display = 'none';
    }
    this.router.navigate(['/login']);
  }
  onChange(location) {
    this.bookingService.crtLocation = location;
    console.log('location', location);
    // Filtered movies
    this.bookingService.getMovies().subscribe({
      next: res => {
        const movies = res;
        this.movies = movies.filter(movie => movie.location.includes(location));
        console.log('Filtered', this.movies);
        this.bookingService.updateMovies(this.movies);
      }
    });
  }
}
