import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthProvider } from '@firebase/auth-types';
import { HelperService } from '../shared/utils/helper.service';

// model user 

interface User {
  nome: string;
  email: string;
  data: any;
  ip: string;
  tempo: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  public disable: boolean = false;
  public tempo: string;

  constructor(private af: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) { }

  ngOnInit() {
  }

  public loginGoogle(event) {
    event.preventDefault();
    this.authUser(new firebase.auth.GoogleAuthProvider);

  }

  public loginFacebook(event) {
    event.preventDefault();
    this.authUser(new firebase.auth.FacebookAuthProvider);

  }

  public loginGit(event) {
    event.preventDefault();
    this.authUser(new firebase.auth.GithubAuthProvider);
  }


  // autenticar usuario
  authUser(provider: AuthProvider) {
    this.af.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      })
      .catch((err) => {
        if(err.message == "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.") {
          this.router.navigate(['info']);
        }
        console.log(err)
      });
  }


// registrar usuario
  updateUserData(user) {
    // referencia do banco
    const dbRef = this.db.object(`users/${user.uid}`);

    const data: User = {
      email: user.email,
      nome: user.displayName,
      data: HelperService.getData(),
      ip: HelperService.getIp(), 
      tempo: this.tempo
    };

    dbRef.set(data)
      .then(() => {
        this.router.navigate(['info']);
      }).catch((err) => console.log(err));

  }

  // pega valor dos botoes
  public onChangeToggle(val: string) {
    this.tempo = val;
    this.disable = true;
  }





}
