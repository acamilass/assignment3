import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoComponent } from './resultado.component';
import { SharedModule } from '../shared/shared.module';
import { ResultadoService } from './resultado.service';
import { QuestService } from '../quest/quest.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  declarations: [ResultadoComponent, FeedbackComponent],
  entryComponents: [ResultadoComponent, FeedbackComponent]
})
export class ResultadoModule { }
