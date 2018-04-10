import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgradecimentoComponent } from './agradecimento.component';
import { AgredecimentoRoutingModule } from './agradecimento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AgredecimentoRoutingModule
  ],
  declarations: [AgradecimentoComponent]
})
export class AgradecimentoModule { }
