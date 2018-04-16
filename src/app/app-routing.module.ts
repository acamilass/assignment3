import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'quests',
    loadChildren: 'app/quest/quest.module#QuestModule'
  },
  {
    path: '',
    loadChildren: 'app/instrucoes/instrucoes.module#InstrucoesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
