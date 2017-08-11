import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Chat } from '../../interfaces/user-data'
import { ChatPage } from '../chat/chat';

import { ChatService } from '../../providers/chatService';

@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {
  queryText = '';

  chats = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chatService: ChatService) {
  }

  ionViewWillEnter() {
  }

  ionViewDidLoad() {
    this.chatService.getChats().then(data => this.chats = data);
    // this.chatService.getChats().subscribe((chats) => {
    //   this.chats = chats;
    // });
    console.log(this.chats);
    console.log('ionViewDidLoad ChatListPage');
  }

  updateChatList() {

  }

  gotoChat(chat) {
    this.navCtrl.push(ChatPage, { chatId: chat.id });
  }
}
