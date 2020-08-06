import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheChoiceComponent } from './the-choice.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'models' },
  {
    path: '',
    component: TheChoiceComponent,
    children: [
      { path: 'models', loadChildren: './models/models.module#ModelsModule' },
      { path: 'price', loadChildren: './price/price.module#PriceModule' },
      { path: 'book-test-ride', loadChildren: './book-test-ride/book-test-ride.module#BookTestRideModule' },
      { path: 'ac', loadChildren: './ac/ac.module#AcModule' },
      { path: 'download-brouchere', loadChildren: './download-brouchere/download-brouchere.module#DownloadBrouchereModule' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheChoiceRoutingModule { }
