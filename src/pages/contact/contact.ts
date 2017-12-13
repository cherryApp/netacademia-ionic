import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  clickOnBackButton(tabIndex: number): void {
    (this.navCtrl.parent as Tabs).select(tabIndex, {}, false);
  }

}
