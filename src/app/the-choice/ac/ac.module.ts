import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcRoutingModule } from './ac-routing.module';
import { AcComponent } from './ac.component';


@NgModule({
  declarations: [AcComponent],
  imports: [
    CommonModule,
    AcRoutingModule
  ]
})
export class AcModule { }
