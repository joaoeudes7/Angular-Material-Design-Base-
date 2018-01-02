import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
// tslint:disable-next-line:max-line-length
import { MatCardModule, MatButtonModule, MatIcon, MatIconModule, MatButtonToggleGroup, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,

    // Form
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
