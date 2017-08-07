import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Chat } from '../../interfaces/user-data'

@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {
  queryText = '';

  chats;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.chats = [{
        id: '1',
        avatar: "assets/img/avatar-ts-barbie.png",
        nickname: "测试人员",
        last_send_at: new Date(),
        last_massage: "测试信息来一串"
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatListPage');
  }

  updateChatList() {

  }

}
