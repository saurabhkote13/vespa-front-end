import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeritageComponent } from './heritage.component';


const routes: Routes = [
  {path:'',component:HeritageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeritageRoutingModule { }
