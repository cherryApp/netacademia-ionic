import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../shared/event-model';

@IonicPage()
@Component({
  selector: 'page-event-manager',
  templateUrl: 'event-manager.html',
})
export class EventManagerPage {

  newEventModel: EventModel = new EventModel();
  eventKeyList: string[] = [
    'name', 'date', 'pictureURL', 'description'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
