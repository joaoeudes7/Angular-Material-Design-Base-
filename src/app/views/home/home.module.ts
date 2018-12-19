import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentModule } from '../../modules/covalent.module';

import { HomeComponent } from './home.component';

import { HistoricModule } from '../historic/historic.module';
import { RandomModule } from '../random/random.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    CovalentModule,

    HistoricModule,
    RandomModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
