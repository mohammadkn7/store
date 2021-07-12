import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeprator'
})
export class CommaSepratorPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    if (value == 0) { return 0; }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
