import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieBookingService } from '../../movie-booking.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  name: any;
  movieBooked: any;
  selected = false;
  selectedTheater: any;
  selectedTheaterDetails: any;
  dateSelected: any;
  timeSelected: any;
  seats: any = 2;
  theaters: any = [
    {location: 'Bengaluru', theaters: ['Forum PVR', 'Phoenix PVR']},
    {location: 'Chennai', theaters: ['Palazzo Cinemas', 'Sathyam Cinemas', 'PVR Cinemas']},
    {location: 'Chandigarh', theaters : ['Neelam Cinemas', 'Wave Cinemas']},
  ];
  currentTheaters: any;
  constructor(private route: ActivatedRoute,
              private router: Router, private bookingService: MovieBookingService) {
      this.name = this.route.snapshot.paramMap.get('name');
      console.log('...this.bookingService.movies', this.bookingService.movies);
      this.bookingService.movies.subscribe(movies => this.movieBooked = movies);
     // this.movieBooked = this.bookingService.movies;
      this.movieBooked = this.movieBooked.filter(movie => movie.name === this.name);
      this.bookingService.selectedMovie = this.movieBooked;
      this.currentTheaters = this.theaters.filter(theaters => theaters.location === this.bookingService.crtLocation);
      console.log('...this.currentTheaters', this.currentTheaters);
  }

  ngOnInit(): void {
  }
  showDetails(selectedTheater){
    this.selected = true;
    this.selectedTheater = selectedTheater;
    this.bookingService.selectedTheater = selectedTheater;
    this.bookingService.getMovieDetails().subscribe(details => {
      this.getSelectedTheaterDetails(details, selectedTheater);
    });
  }
  getSelectedTheaterDetails(details, selectedTheater){
    this.selectedTheaterDetails = details.filter(theater => theater.theater === selectedTheater);
  }
  getDate(dateSelected){
    this.dateSelected = dateSelected;
  }
  getTime(timeSelected){
    this.timeSelected = timeSelected;
  }
  onBack(){
    this.router.navigate(['/movies']);
  }
  proceed(){
    this.bookingService.selectedDate = this.dateSelected;
    this.bookingService.selectedTime = this.timeSelected;
    this.bookingService.selectedMovie = this.movieBooked;
    this.bookingService.seats = this.seats;
    console.log('....price in string', this.selectedTheaterDetails[0].price);
    console.log('....price in number', Number(this.selectedTheaterDetails[0].price));
    this.bookingService.totalPrice = Number(this.selectedTheaterDetails[0].price) * Number(this.seats);
    this.bookingService.selectedLocation = this.bookingService.crtLocation;
    this.router.navigate(['/bookingsummary']);
  }
}
