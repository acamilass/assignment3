import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  user: string;

  constructor(private af: AngularFireAuth) { }


  ngOnInit() {
  }

  public loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
  }

  
  

}
