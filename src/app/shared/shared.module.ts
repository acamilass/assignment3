import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MaterialModule
  ],
  declarations: [],

  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
