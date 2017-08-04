import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
/**
 * Generated class for the MePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

  openSettingsPage() {
    this.navCtrl.push(SettingsPage)
  }

  openAboutPage() {
    this.navCtrl.push(AboutPage)
  }

}
