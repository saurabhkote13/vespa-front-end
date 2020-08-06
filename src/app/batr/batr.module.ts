import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatrRoutingModule } from './batr-routing.module';
import { BatrComponent } from './batr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BatrComponent],
  imports: [
    CommonModule,
    BatrRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BatrModule { }
