import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomComponent } from './random.component';

import { FormReactiveModule } from '../../modules/form.module';
import { MaterialModule } from '../../modules/material.module';
import { CovalentModule } from '../../modules/covalent.module';

@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule,

    FormReactiveModule,
    MaterialModule,
    CovalentModule
  ],
  exports: [RandomComponent]
})
export class RandomModule { }
