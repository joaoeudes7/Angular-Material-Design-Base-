import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// tslint:disable-next-line:max-line-length
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule } from '@covalent/core';

@NgModule({
  imports: [CommonModule],
  exports: [
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentMenuModule,
  ]
})
export class CovalentModule { }
