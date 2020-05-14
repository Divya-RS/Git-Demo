import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from '../../movie-booking.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  totalPrice: any;

  constructor(private router: Router, private bookingService: MovieBookingService) {
    this.totalPrice = this.bookingService.totalPrice;
  }

  ngOnInit(): void {
  }
  bookMore(){
    this.router.navigate(['/movies', this.bookingService.selectedMovie[0].name, this.bookingService.selectedLocation]);
  }
}
