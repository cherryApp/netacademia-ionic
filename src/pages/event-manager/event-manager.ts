import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../shared/event-model';
import { EventServiceProvider } from '../../providers/event-service/event-service';

@IonicPage()
@Component({
  selector: 'page-event-manager',
  templateUrl: 'event-manager.html',
})
export class EventManagerPage {

  @Output() newEventModel: EventModel = new EventModel();
  eventKeyList: object[] = [
    {key: 'name', label: "Név"},
    {key: 'date', label: "Dátum"},
    {key: 'pictureUrl', label: "Kép"},
    {key: 'description', label: "Leírás"}
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventServiceProvider) {
      console.log(this.navParams.data.baseEvent);
      this.newEventModel = {
        $id: this.navParams.data.baseEvent.$key,
        name: this.navParams.data.baseEvent.name,
        pictureURL: this.navParams.data.baseEvent.pictureURL,
        date: this.navParams.data.baseEvent.date,
        description: this.navParams.data.baseEvent.description,
        tickets: this.navParams.data.baseEvent.tickets
      };
  }

  saveNewEvent() {
    this.eventService.save(this.newEventModel)
      .forEach( response => {
        console.log(response);
      });
  }

}
