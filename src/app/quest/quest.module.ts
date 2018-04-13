import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestRoutingModule } from './quest-routing.module';
import { QuestComponent } from './quest.component';

@NgModule({
  imports: [
    CommonModule,
    QuestRoutingModule
  ],
  declarations: [QuestComponent]
})
export class QuestModule { }
