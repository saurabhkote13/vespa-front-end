import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatrComponent } from './batr.component';


const routes: Routes = [
  {path:'',component:BatrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatrRoutingModule { }
