import {Component} from '@angular/core';
import {App, NavController, NavParams, Platform} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare let cordova: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private app: App) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username, password) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userInfo: string = '用户名：' + username.value + '密码：' + password.value;
      console.log(userInfo);

      cordova.plugins.TaskManager.login("test args", function (obj) {
        // alert("success:" + obj);
      }, function (obj) {
        alert("error:" + obj);
      });

      cordova.plugins.TaskManager.login("test args", (obj) => {
        alert("success:" + obj);
      }, (err) => {
        alert("error:" + err);
      });

      this.app.getRootNav().setRoot(TabsPage);
    }
  }

}
