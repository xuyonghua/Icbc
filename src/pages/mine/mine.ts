import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  pageName: any;
  menuItems: any = [{'icon': 'ios-help-circle-outline', 'text': '安全中心'},
    {'icon': 'ios-call-outline', 'text': '联系我们'},
    {'icon': 'ios-information-circle-outline', 'text': '关于'},
    {'icon': 'ios-help-circle-outline', 'text': '帮助'},
    {'icon': 'ios-settings-outline', 'text': '设置'}];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  login(){
    // let modal = this.modalCtrl.create(LoginPage);
    // modal.present();
    this.navCtrl.push(LoginPage);
  }

  logout(){}


}
