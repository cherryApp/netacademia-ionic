import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { TicketModel } from '../../shared/ticket-model';

@Injectable()
export class TicketServiceProvider {

  constructor(public afDb: AngularFireDatabase) {
    console.log('Hello TicketServiceProvider Provider');
  }

  getAllTicket(): Observable<TicketModel[]> {
    return this.afDb.list("tickets");
  }


}
