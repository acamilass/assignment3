import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatRadioModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatProgressBarModule, MatListModule } from '@angular/material';


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
    MatListModule
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
    MatListModule
  ]

})
export class MaterialModule { }
