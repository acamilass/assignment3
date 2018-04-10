import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login/login.component';
// import { CadastroComponent } from './cadastro/cadastro.component';
// import { AgredecimentoComponent } from './agredecimento/agredecimento.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/cadastro/cadastro.module#CadastroModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'agradecimento',
    loadChildren: 'app/agradecimento/agradecimento.module#AgradecimentoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }