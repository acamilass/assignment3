import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestRoutingModule } from './quest-routing.module';
import { QuestComponent } from './quest.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule 
  ],
  declarations: [QuestComponent]
})
export class QuestModule { }
