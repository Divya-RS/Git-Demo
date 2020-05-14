import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from './movie-booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movie Ticket Booking';
  loginTitle = 'Login';
  username = sessionStorage.getItem('username');
  location = 'Bengaluru';
  constructor(private router: Router, private bookingService: MovieBookingService) {
    sessionStorage.clear();
    this.bookingService.crtLocation = 'Bengaluru';
    sessionStorage.setItem('location', this.bookingService.crtLocation);
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
  onChange(location){
    sessionStorage.setItem('location', location);
    this.bookingService.crtLocation =  location;
  }
}
