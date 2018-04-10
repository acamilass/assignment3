import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AgredecimentoModule } from './agredecimento/agredecimento.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderModule,
    CadastroModule,
    AgredecimentoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
