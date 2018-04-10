 // import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';

import { CommonModule } from '@angular/common';
// import { CadastroModule } from './cadastro/cadastro.module';
// import { AgredecimentoModule } from './agredecimento/agredecimento.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
 //   BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderModule
  //  CadastroModule,
    // AgredecimentoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
