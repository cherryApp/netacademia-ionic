import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { loginDataModel } from '../../shared/loginDataModel';
import { UserInfo } from 'firebase/app';
import { UserModel } from '../../shared/user-model';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserServiceProvider {

  isLogin: boolean = false;
  currentUser: loginDataModel = new loginDataModel();
  loginSubject: Subject<any> = new Subject();

  constructor(
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase) {}

  login(param: loginDataModel) {
    this.afAuth.auth.signInWithEmailAndPassword(
      param.email,
      param.password
    ).then( (user: UserInfo) => {
      this.isLogin = true;
      this.currentUser = new loginDataModel(user);
      this.loginSubject.next(this.currentUser);
    }).catch( firebaseError => {
      console.error(firebaseError);
    });
  }

}
