import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrucoesComponent } from './instrucoes.component';

const routes: Routes = [
  {
    path: '',
    component: InstrucoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrucoesRoutingModule { }
