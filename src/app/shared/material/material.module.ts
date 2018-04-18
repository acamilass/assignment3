import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,  MatRadioModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatProgressBarModule, MatListModule, MatButtonToggleModule, MatDialogModule, MatFormField, MatFormFieldModule, MatFormFieldControl, MatInputModule } from '@angular/material';


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
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
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
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]

})
export class MaterialModule { }
