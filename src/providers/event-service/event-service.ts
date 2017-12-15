import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { EventModel } from '../../shared/event-model';

@Injectable()
export class EventServiceProvider {

  constructor(public afDb: AngularFireDatabase) {}

  getAllEvent(): Observable<EventModel[]> {
    return this.afDb.list("events");
  }

}
