import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { loginDataModel } from '../../shared/loginDataModel';
import { UserInfo } from 'firebase/app';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserServiceProvider {

  isLogin: boolean = false;
  currentUser: loginDataModel = new loginDataModel();
  loginSubject: Subject<any> = new Subject();

  constructor(
    public afAuth: AngularFireAuth) {
      if (localStorage.loggedInUser) {
        this.currentUser = JSON.parse(localStorage.loggedInUser);
        this.setLoggedInState();
      }
    }

  setLoggedInState() {
    this.isLogin = true;
    this.currentUser = new loginDataModel(this.currentUser);
    this.loginSubject.next(this.currentUser);
  }

  login(param: loginDataModel) {
    this.afAuth.auth.signInWithEmailAndPassword(
      param.email,
      param.password
    ).then( (user: UserInfo) => {
      localStorage.loggedInUser = JSON.stringify(user);
      this.setLoggedInState();
    }).catch( firebaseError => {
      console.error(firebaseError);
    });
  }

}
