import { Component } from '@angular/core';

import { MePage } from '../me/me';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = MePage;

  constructor() {

  }
}
