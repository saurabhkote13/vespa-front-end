import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoresComponent } from './our-stores.component';


const routes: Routes = [
  {path:'',component:OurStoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurStoresRoutingModule { }
