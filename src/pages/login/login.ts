import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPageModule } from './login.module';
import { loginDataModel } from '../../shared/loginDataModel';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  loginData: loginDataModel = {
    email: "",
    password: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider) {
  }

  ngOnInit() {
    console.log("login init");
    if (this.userService.isLogin) {
      this.navCtrl.setRoot(TabsPage);
    }

    this.userService.loginSubject.subscribe(
      user => {
        this.navCtrl.setRoot(TabsPage);
      }
    );
  }

  login() {
    this.userService.login(this.loginData);
  }

}
