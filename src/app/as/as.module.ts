import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsRoutingModule } from './as-routing.module';
import { AsComponent } from './as.component';


@NgModule({
  declarations: [AsComponent],
  imports: [
    CommonModule,
    AsRoutingModule
  ]
})
export class AsModule { }
