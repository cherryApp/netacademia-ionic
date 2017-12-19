import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'showDate',
})
export class ShowDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    console.log("showDate", value, typeof value);
    let date = moment.unix(value);
    return date.format('YYYY.MM.DD');
  }
}
