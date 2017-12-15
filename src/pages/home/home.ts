import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventModel } from '../../shared/event-model';
import { EventManagerPage } from '../event-manager/event-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  private eventList: EventModel[] = [];

  constructor(
    public navCtrl: NavController,
    public eventService: EventServiceProvider) {

  }

  ngOnInit() {
    this.eventService.getAllEvent().subscribe(
      events => {
        this.eventList = events;
        console.log(this.eventList);
      }
    )
  }

  openEventManager() {
    this.navCtrl.push(EventManagerPage);
  }

}
