import {Component} from '@angular/core';
import {App, NavController} from "ionic-angular";
import {TabsPage} from "../../pages/tabs/tabs";

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
  constructor(public navCtrl: NavController, private app: App) {

  }

  goRoot() {
    this.app.getRootNav().setRoot(TabsPage);
  }

}
