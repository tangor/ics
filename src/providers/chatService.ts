import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { Chat } from "../interfaces/user-data"

@Injectable()
export class ChatService {
  constructor(public http: Http) { }

  getChats() {
    return this.http.get('assets/data/chat-data.json')
      .toPromise()
      .then((response) => {
        response.json()["chat-list"] as Chat[]
      })
      .catch(this.handleError);
    // return this.http.get('assets/data/chat-data.json')
    //   .map((response) => {
    //     return(response.json()["chat-list"]);
    //   });
  }

  getChat(chatId) {
    return this.http.get('assets/data/chat-data.json')
      .map((response) => {
        let chats = response.json()["chat-list"];
        for(let chat of chats) {
          if(chat['id'] == chatId) {
            return chat;
          }
        }
        return null;
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
