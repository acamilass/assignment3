import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AngularFireModule } from 'angularfire2';

import { SharedModule } from '../shared/shared.module';

export const firebaseConfig = {
  apiKey: "AIzaSyA3rC0FnpR4N2GppLlwYuhlnjop1mzXNUM",
  authDomain: "xpassignment3.firebaseapp.com",
  databaseURL: "https://xpassignment3.firebaseio.com",
  projectId: "xpassignment3",
  storageBucket: "xpassignment3.appspot.com",
  messagingSenderId: "1008286252347"
};

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
