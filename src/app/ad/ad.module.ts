import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdComponent } from './ad.component';


@NgModule({
  declarations: [AdComponent],
  imports: [
    CommonModule,
    AdRoutingModule
  ]
})
export class AdModule { }
