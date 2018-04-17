import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2/angularfire2';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    
  ],
  providers: [
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
