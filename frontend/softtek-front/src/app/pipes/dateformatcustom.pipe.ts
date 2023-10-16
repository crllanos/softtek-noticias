import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateformatcustom'
})
export class DateformatcustomPipe implements PipeTransform {

  transform(date: string): string {
    // Formatea la fecha usando date-fns
    const formattedDate = format(new Date(date), 'dd MMM yyyy');
    return formattedDate;
  }

}
