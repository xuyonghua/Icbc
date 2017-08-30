import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoanPage} from "../loan/loan";
import {CrmPage} from "../crm/crm";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loanPage = LoanPage;
  crmPage = CrmPage;
  slides = [{'image': 'assets/icon/banner1.png'}, {'image': 'assets/icon/banner2.png'}];

  constructor(public navCtrl: NavController) {

  }

}
