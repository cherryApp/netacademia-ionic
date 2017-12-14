import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TicketPage } from '../pages/ticket/ticket';
import { SellTicketPage } from '../pages/sell-ticket/sell-ticket';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  baseUrl: 'https://jegybazar-27302.firebaseio.com',
  registrationUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
  loginUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
  apiKey: 'AIzaSyALPBS-gllA6F-vRya-6pYZXABheOWFYlw',
  authDomain: 'jegybazar-27302.firebaseapp.com',
  databaseURL: 'https://jegybazar-27302.firebaseio.com',
  projectId: 'jegybazar-27302',
  storageBucket: 'jegybazar-27302.appspot.com',
  messagingSenderId: '873164960496'
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketPage,
    SellTicketPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketPage,
    SellTicketPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    UserServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
