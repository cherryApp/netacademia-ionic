import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TicketServiceProvider } from '../../providers/ticket-service/ticket-service';
import { TicketModel } from '../../shared/ticket-model';
import { EventServiceProvider } from '../../providers/event-service/event-service';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage implements OnInit {

  ticketList: TicketModel[] = [];
  pictures: object = {};
  searchPhrase: string = "";
  shouldShowCancel: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ticketService: TicketServiceProvider,
    public eventService: EventServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  ngOnInit() {
    this.ticketService.getAllTicket().subscribe(
      tickets => {
        this.ticketList = tickets;
        console.log(this.ticketList);
      }
    );
    // Képek lekérése.
    this.pictures = this.eventService.pictures;
    this.eventService.idAndPic.subscribe(
      pictures => {
        this.pictures = pictures;
      });
  }

  getPicture(id) {
    return this.pictures[id];
  }

  clickOnBackButton(tabIndex) {
    let options: NavOptions = {
      updateUrl: true,
      animate: true,
      animation: "md-transition"
    };
    (this.navCtrl.parent as Tabs).select(tabIndex, options, false);
  }

}
