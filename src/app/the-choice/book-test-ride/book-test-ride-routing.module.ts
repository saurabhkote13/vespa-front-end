import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTestRideComponent } from './book-test-ride.component';


const routes: Routes = [
  {path:'',component:BookTestRideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTestRideRoutingModule { }
