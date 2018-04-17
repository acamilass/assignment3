import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCft2BCAxpxOnxJzAcTREHudDpi1RbWOSg",
    authDomain: "assignment3-mvp.firebaseapp.com",
    databaseURL: "https://assignment3-mvp.firebaseio.com",
    projectId: "assignment3-mvp",
    storageBucket: "assignment3-mvp.appspot.com",
    messagingSenderId: "272709917432"
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
