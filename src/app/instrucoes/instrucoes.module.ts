import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrucoesRoutingModule } from './instrucoes-routing.module';
import { InstrucoesComponent } from './instrucoes.component';

@NgModule({
  imports: [
    CommonModule,
    InstrucoesRoutingModule
  ],
  declarations: [InstrucoesComponent]
})
export class InstrucoesModule { }
