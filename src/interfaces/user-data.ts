export interface User {
  id: string,
  username: string,
  nickname: string,
  // password: string,
  avarta: string
}

export interface Message {
  id: string,
  sender_id: string,
  // receiver: User,
  type: string,
  content: any,
  send_at: Date
}

export interface Chat {
  id: string,
  avatar: string,
  nickname: string,
  last_send_at: Date,
  last_massage: string
}
