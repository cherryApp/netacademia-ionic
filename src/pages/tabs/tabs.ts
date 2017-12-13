import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';
import { SellTicketPage } from '../sell-ticket/sell-ticket';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TicketPage;
  tab3Root = SellTicketPage;

  constructor() {}
}
