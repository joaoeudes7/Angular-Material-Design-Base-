import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricComponent } from './historic.component';
import { MatCardModule, MatDividerModule, MatListModule, MatIconModule } from '@angular/material';
import { CovalentVirtualScrollModule } from '@covalent/core';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  declarations: [HistoricComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,

    CovalentVirtualScrollModule,
  ],
  exports: [HistoricComponent]
})
export class HistoricModule { }
