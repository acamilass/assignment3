// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { QuestService } from './quest/quest.service';
import { ResultadoService } from './resultado/resultado.service';
import { MarkdownModule } from 'ngx-markdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
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
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
