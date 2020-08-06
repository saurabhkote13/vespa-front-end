import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheChoiceRoutingModule } from './the-choice-routing.module';
import { TheChoiceComponent } from './the-choice.component';
import { ModelsComponent } from './models/models.component';
import { PriceComponent } from './price/price.component';
import { BookTestRideComponent } from './book-test-ride/book-test-ride.component';
import { DownloadBrouchereComponent } from './download-brouchere/download-brouchere.component';
import { AcComponent } from './ac/ac.component';


@NgModule({
  declarations: [TheChoiceComponent,],
  imports: [
    CommonModule,
    TheChoiceRoutingModule
  ]
})
export class TheChoiceModule { }
