import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Buffer } from 'buffer';

const URL_TOKEN = "http://222.177.210.150:8081/oauth/token";           //登陆
const URL_LOGOUT = "http://222.177.210.150:8081/oauth/revoke-token";     //退出登陆


const LOGIN_API = "/login/firstLogin";
const UPDATE_TOKEN_API = "/login/updateToken";
const GET_NUM = "/login/getCode";
const UPDATE_PASSWORD = "/login/setNewPassword2";

@Injectable()
export class AuthService {

  private headers: Headers;
  private authHeaders: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.authHeaders = new Headers();
    this.authHeaders.append('Content-Type', 'application/json');
    this.authHeaders.append('Authorization', 'Basic Y2xpZW50X2FwcF9pZDpzZWNyZXQ=');
  }

  login(username, password){
    var params = JSON.stringify({
      telephone: new Buffer(username).toString('base64'),
      password:  new Buffer(password).toString('base64'),
    })
    return this.http.post(LOGIN_API, params, { headers: this.headers })
  }

  updateToken(token) {
    var params = JSON.stringify({
      token: new Buffer(token).toString('base64')
    })
    return this.http.post(LOGIN_API, params, { headers: this.headers })
  }

  getNum(username) {
    var params = JSON.stringify({
      telephone: new Buffer(username).toString('base64')
    })
    return this.http.post(GET_NUM, params, { headers: this.headers })
  }

  updatePassword(telephone, password, password2, checkNum){
    var params = JSON.stringify({
      telephone: new Buffer(telephone).toString('base64'),
      pw1: new Buffer(password).toString('base64'),
      pw2:  new Buffer(password2).toString('base64'),
      code:  new Buffer(checkNum).toString('base64')
    })
    return this.http.post(UPDATE_PASSWORD, params, { headers: this.headers })
  }

  getAccessToken(username, password){
    var params = JSON.stringify({
      grant_type: "password",
      username: username,
      password:  password
    })
    return this.http.post(URL_TOKEN, params, { headers: this.authHeaders })
  }

  getAccessTokenByRefreshToken(refreshToken){
    var params = JSON.stringify({
      grant_type: "refresh_token",
      refreshToken:  refreshToken
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return this.http.post(UPDATE_PASSWORD, params, { headers: this.authHeaders })
  }

}
