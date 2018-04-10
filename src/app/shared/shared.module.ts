import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  declarations: [],
  exports: [
    MaterialModule,
    UtilsModule
  ]
})
export class SharedModule { }
