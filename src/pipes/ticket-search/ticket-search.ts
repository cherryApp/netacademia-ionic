import { Pipe, PipeTransform } from '@angular/core';
import { TicketModel } from '../../shared/ticket-model';

@Pipe({
  name: 'ticketSearch',
})
export class TicketSearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(tickets: Array<any>, ...args) {
    return tickets.filter( (ticket) => {
      return ticket.details.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    });
  }
}
