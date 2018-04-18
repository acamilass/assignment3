// import { BrowserModule } from '@angular/platform-browser';
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
import { QuestService } from './quest/quest.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadoService } from './resultado/resultado.service';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  // BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    MarkdownModule.forRoot()
    
  ],
  providers: [
    QuestService,
    ResultadoService,
    AngularFireDatabase,
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
