import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { EventModel } from '../../shared/event-model';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventServiceProvider {

  allEvents: Observable<EventModel[]>;
  idAndPic: Subject<{}> = new Subject();
  pictures: object = {};

  constructor(public afDb: AngularFireDatabase) {
    this.getAllEvent().subscribe(
      events => {
        this.pictures = {};
        for (let event of events) {
          this.pictures[event.id] = event.pictureURL;
        }
        this.idAndPic.next(this.pictures);
      }
    );
  }

  getAllEvent(): Observable<EventModel[]> {
    this.allEvents = this.afDb.list("events");
    return this.allEvents;
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
