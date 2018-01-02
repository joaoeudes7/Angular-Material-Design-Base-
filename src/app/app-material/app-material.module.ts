import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class AppMaterialModule { }
