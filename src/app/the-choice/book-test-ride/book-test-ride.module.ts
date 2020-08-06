import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTestRideRoutingModule } from './book-test-ride-routing.module';
import { BookTestRideComponent } from './book-test-ride.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BookTestRideComponent],
  imports: [
    CommonModule,
    BookTestRideRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BookTestRideModule { }
