import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadBrouchereComponent } from './download-brouchere.component';


const routes: Routes = [
  {path:'',component:DownloadBrouchereComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadBrouchereRoutingModule { }
