import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { loginDataModel } from '../../shared/loginDataModel';

@Injectable()
export class UserServiceProvider {

  constructor(public afAuth: AngularFireAuth) {}

  login(model: loginDataModel) {
    this.afAuth.auth.signInWithEmailAndPassword(
      model.email,
      model.password
    ).then( firebaseResponse => {
      console.dir(firebaseResponse);
    }).catch( firebaseError => {
      console.error(firebaseError);
    });
  }

}
