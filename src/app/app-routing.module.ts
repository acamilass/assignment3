import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: 'app/quest/quest.module#QuestModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'info',
    loadChildren: 'app/instrucoes/instrucoes.module#InstrucoesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'result',
    loadChildren: 'app/resultado/resultado.module#ResultadoModule',
    canActivate: [AuthGuard]
  },
  {             
    path: '**',             
    redirectTo: ''         
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
