import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../providers/authService';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private authService: AuthService) {

    viewCtrl.showBackButton(false);

    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  usernameEntry() {
    console.log("usernameEntryEvent");
  }

  login() {
    let username = this.form.value.username;
    let password = this.form.value.password;

    console.log(username, password);
    if(!username|| !password) {
      let loader = this.loadingCtrl.create({
        content: "请输入用户名和密码。",
        duration: 800
      });
      loader.present();
      return false;
    }

    // var checkPss = /^\w+$/;
    // if(!checkPss.test(password)){
    //   let loader = this.loadingCtrl.create({
    //     content: "密码只能由字母数字下划线组成。",
    //     duration: 800
    //   });
    //   loader.present();
    //   return false;
    // }

    // this.authService.getAccessToken(username, password)
    //   .then((data) => {
    //
    //   });

    console.log("{{username}} logined.");
    this.navCtrl.push(TabsPage);
  }

}
