import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoComponent } from './resultado.component';
import { SharedModule } from '../shared/shared.module';
import { ResultadoService } from './resultado.service';
import { QuestService } from '../quest/quest.service';

@NgModule({
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    SharedModule
  ],
  providers: [ResultadoService],
  declarations: [ResultadoComponent]
})
export class ResultadoModule { }
