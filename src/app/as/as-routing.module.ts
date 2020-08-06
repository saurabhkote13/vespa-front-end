import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsComponent } from './as.component';


const routes: Routes = [
  {path:'',component:AsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsRoutingModule { }
