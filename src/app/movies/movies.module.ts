import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RatingComponent } from './rating/rating.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HighlightDirective } from './highlight.directive';
import { MovieFilterPipe } from './movies-list/movie-filter.pipe';
import { OrderByFilterPipe } from './movies-list/order-by-filter.pipe';
import { LocationFilterPipe } from './location-filter.pipe';

@NgModule({
  declarations: [
    RatingComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    SummaryComponent,
    CheckoutComponent,
    HighlightDirective,
    MovieFilterPipe,
    OrderByFilterPipe,
    LocationFilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ],
})
export class MoviesModule { }
