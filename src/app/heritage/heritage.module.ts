import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeritageRoutingModule } from './heritage-routing.module';
import { HeritageComponent } from './heritage.component';


@NgModule({
  declarations: [HeritageComponent],
  imports: [
    CommonModule,
    HeritageRoutingModule
  ]
})
export class HeritageModule { }
