import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { EventModel } from '../../shared/event-model';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class EventServiceProvider {

  constructor(public afDb: AngularFireDatabase) {}

  getAllEvent(): Observable<EventModel[]> {
    return this.afDb.list("events");
  }

  save(param: EventModel) {
    if (param.$id) {
      // update
      param.id = param.$id;
      return fromPromise(this.afDb.object(`events/${param.$id}`).update(param));
    } else {
      // create
      // return fromPromise(this.afDb.object(`events/${param.$id}`).set(param));
      return fromPromise(this.afDb.list("events").push(param));
    }
  }

}
