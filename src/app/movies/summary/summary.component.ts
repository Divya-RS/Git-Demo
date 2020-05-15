import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from '../../movie-booking.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  movieSelected: any;

  constructor(private router: Router, private bookingService: MovieBookingService) {
    this.movieSelected = {
      name: this.bookingService.selectedMovie[0].name,
      theater: this.bookingService.selectedTheater,
      location: this.bookingService.crtLocation,
      seatsBooked: this.bookingService.seats,
      price: this.bookingService.totalPrice,
      showDate: this.bookingService.selectedDate,
      showTime: this.bookingService.selectedTime
    };
  }

  ngOnInit(): void {
  }
  modifyBooking(){
    this.router.navigate(['/movies']);
  }
  ConfirmBooking(){
    this.router.navigate(['/checkout']);
  }
}
