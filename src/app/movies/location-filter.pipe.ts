import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(movieList: any): any {
    const location = sessionStorage.getItem('location');
    console.log('...reached LocationFilterPipe with ', movieList, location);
    if (!movieList || !location) {
      return movieList;
    }

    return movieList.filter(movie => movie.location.includes(location));
  }

}
