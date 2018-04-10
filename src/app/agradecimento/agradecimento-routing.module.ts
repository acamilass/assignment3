import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgradecimentoComponent } from './agradecimento.component';



const routes: Routes = [
    {
        path: '',
        component: AgradecimentoComponent
    }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgredecimentoRoutingModule { }
