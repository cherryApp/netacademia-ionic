import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';
import { NavOptions } from 'ionic-angular/navigation/nav-util';

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
export class TicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
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
