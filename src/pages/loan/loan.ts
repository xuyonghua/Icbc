import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {TaskPage} from "../task/task";

/**
 * Generated class for the LoanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-loan',
  templateUrl: 'loan.html',
})
export class LoanPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  }

  goTaskList(){
    this.navCtrl.push(TaskPage);
  }

}
