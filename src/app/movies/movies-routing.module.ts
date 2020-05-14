import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: MoviesListComponent  },
    { path: ':name/:location', component: MoviesDetailComponent },
    { path: 'bookingsummary', component: SummaryComponent  },
    { path: 'checkout', component: CheckoutComponent  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
