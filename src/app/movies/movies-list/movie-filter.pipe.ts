import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movieList: any, movieName: any): any {
    if (!movieList || !movieName){
      return movieList;
    }
    return movieList.filter(movie => movie.name.toLowerCase().indexOf(movieName.toLowerCase()) !== -1);
  }

}
