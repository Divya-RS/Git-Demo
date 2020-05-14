import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByFilter'
})
export class OrderByFilterPipe implements PipeTransform {

  transform(movieList: any, sortOption: any): any {
    if (!movieList || !sortOption) {
      return movieList;
    }
    switch (sortOption) {
      case 'popularity':
        return movieList.sort((movie1, movie2) => {
          if (movie1.rating < movie2.rating) {
            return 1;
          }
          if (movie1.rating > movie2.rating) {
            return -1;
          }
          return 0;
        });
      case 'namelh':
        return movieList.sort((movie1, movie2) => {
          if (movie1.name.toLowerCase() > movie2.name.toLowerCase()) {
            return 1;
          }
          if (movie1.name.toLowerCase() < movie2.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      case 'namehl':
        return movieList.sort((movie1, movie2) => {
          if (movie1.name.toLowerCase() < movie2.name.toLowerCase()) {
            return 1;
          }
          if (movie1.name.toLowerCase() > movie2.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      default:
        return movieList;
    }
  }

}
