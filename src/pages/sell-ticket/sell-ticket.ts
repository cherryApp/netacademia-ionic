import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SellTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sell-ticket',
  templateUrl: 'sell-ticket.html',
})
export class SellTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellTicketPage');
  }

  clickOnBackButton(tabIndex: number): void {
    this.navCtrl.parent.select(tabIndex);
  }

}
