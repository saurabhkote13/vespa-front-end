import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadBrouchereRoutingModule } from './download-brouchere-routing.module';
import { DownloadBrouchereComponent } from './download-brouchere.component';


@NgModule({
  declarations: [DownloadBrouchereComponent],
  imports: [
    CommonModule,
    DownloadBrouchereRoutingModule
  ]
})
export class DownloadBrouchereModule { }
