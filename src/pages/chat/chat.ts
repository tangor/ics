import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/userService';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
