import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }