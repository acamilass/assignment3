import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,  MatRadioModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatProgressBarModule, MatListModule, MatButtonToggleModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule,
    MatListModule,
    MatButtonToggleModule
  ],
  declarations: [],

  exports: [
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule,
    MatListModule,
    MatButtonToggleModule
  ]

})
export class MaterialModule { }
