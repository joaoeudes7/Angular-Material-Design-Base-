import { CovalentVirtualScrollModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// tslint:disable-next-line:max-line-length
import { MatCardModule, MatButtonModule, MatIcon, MatIconModule, MatButtonToggleGroup, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovalentModule } from '../../modules/covalent.module';
import { MaterialModule } from '../../modules/material.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,

    MaterialModule,
    CovalentModule,

    CovalentVirtualScrollModule,

    // Form
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
