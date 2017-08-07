import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-data'

@Injectable()
export class UserService {

  private currentUser: User;
  users;

  constructor() {
    this.users = [
      { id: "1",
        username: "Ben",
        avatar: "assets/img/avatar_ben.png" },
      { id: "2",
        username: "Finn",
        avatar: "assets/img/avatar_finn.png"
      }
    ]
    this.currentUser = this.users[0];
  }

  isCurrentUser(user: User): boolean {
    return user.id == this.currentUser.id
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

}
