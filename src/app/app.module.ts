import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {MinePage} from '../pages/mine/mine';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoanPage} from "../pages/loan/loan";
import {CrmPage} from "../pages/crm/crm";
import {TaskPage} from "../pages/task/task";
import {HomeComponent} from "../components/home/home";
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    MinePage,
    HomePage,
    TabsPage,
    LoanPage,
    CrmPage,
    TaskPage,
    LoginPage,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      // backButtonIcon: 'ios-arrow-back',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinePage,
    HomePage,
    TabsPage,
    LoanPage,
    CrmPage,
    LoginPage,
    TaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
