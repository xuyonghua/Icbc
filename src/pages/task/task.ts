import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the TaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage {
  count: number = 0;
  taskList = [{}, {}];
  searchQuery: string = '';
  status = "undone";
  items: string[] =[
    'Amsterdam',
    'Bogota',
    'Coco',
    'SK',
    'WD'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goTaskDetail(task) {

  }


  getItems(ev: any) {

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  tabSelect(type){
    if(type == 1){
      this.items =[
        'IGV',
        'DK',
        'OG'
      ];
    }else {
      this.items =[
        'IG',
        'LGD',
        'LFY',
        'NB',
        'EH'
      ];
    }
  }

  goRoot(){
    this.navCtrl.setRoot(TabsPage);
  }

}
