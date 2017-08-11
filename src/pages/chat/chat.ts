import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chat } from '../../interfaces/user-data'
import { UserService } from '../../providers/userService';
import { ChatService } from '../../providers/chatService';

@IonicPage({
  segment: 'chat/:chatId'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chat;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
    private chatService: ChatService) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ChatPage');
  }

  ionViewDidLoad() {
    this.chatService.getChat(this.navParams.data.chatId).subscribe((chat) => {
      this.chat = chat
      console.log(this.chat);
    });
    console.log(this.chat);
    console.log('ionViewDidLoad ChatPage');
  }
}
