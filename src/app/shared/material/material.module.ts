import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatRadioModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule 
  ],
  declarations: [],

  exports: [
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule
  ]

})
export class MaterialModule { }
