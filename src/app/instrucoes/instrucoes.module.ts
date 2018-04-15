import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrucoesRoutingModule } from './instrucoes-routing.module';
import { InstrucoesComponent } from './instrucoes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InstrucoesRoutingModule,
    SharedModule 
  ],
  declarations: [InstrucoesComponent]
})
export class InstrucoesModule { }
