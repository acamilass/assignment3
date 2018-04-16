import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoComponent } from './resultado.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    SharedModule
  ],
  declarations: [ResultadoComponent]
})
export class ResultadoModule { }
