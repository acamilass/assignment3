import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './resultado.component';
import { ResultadoService } from './resultado.service';

const routes: Routes = [
  {
    path: '',
    component: ResultadoComponent,
    resolve: {
      response: ResultadoService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoRoutingModule { }
