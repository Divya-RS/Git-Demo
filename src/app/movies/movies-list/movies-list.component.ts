import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from '../../movie-booking.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  sortOption = 'popularity';
  moviesList: any;
  movieName: any;
  constructor(private bookingService: MovieBookingService, private router: Router) {
    document.getElementById('login').style.display = 'block';
    document.getElementById('login').innerHTML = 'Logout';
    sessionStorage.setItem('loginTitle', 'Logout');
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('welcome').style.color = '#ff0080';
    this.bookingService.getMovies().subscribe(movies => this.moviesList = movies);
  }
  ngOnInit(): void {
    // this.bookingService.getMovies().subscribe({
    //   next: res => {
    //     this.bookingService.movies = res;
    //     this.moviesList = this.bookingService.movies.filter(movie => movie.location.includes(this.bookingService.crtLocation));
    //   }
    // });
    this.bookingService.movies.subscribe(movies => this.moviesList = movies);
  }
  bookTicket(name: string) {
    this.router.navigate(['/movies/', name, this.bookingService.crtLocation]);
  }
}
