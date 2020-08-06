import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurStoresRoutingModule } from './our-stores-routing.module';
import { OurStoresComponent } from './our-stores.component';


@NgModule({
  declarations: [OurStoresComponent],
  imports: [
    CommonModule,
    OurStoresRoutingModule
  ]
})
export class OurStoresModule { }
