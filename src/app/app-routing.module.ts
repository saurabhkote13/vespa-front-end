import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',loadChildren:'./home/home.module#HomeModule'},
  {path:'global',loadChildren:'./global/global.module#GlobalModule'},
  {path:'the-choice',loadChildren:'./the-choice/the-choice.module#TheChoiceModule'},
  {path:'ad',loadChildren:'./ad/ad.module#AdModule'},
  {path:'our-stores',loadChildren:'./our-stores/our-stores.module#OurStoresModule'},
  {path:'heritage',loadChildren:'./heritage/heritage.module#HeritageModule'},
  {path:'bad',loadChildren:'./bad/bad.module#BadModule',canLoad:[AuthenticationService]},
  {path:'batr',loadChildren:'./batr/batr.module#BatrModule'},
  {path:'as',loadChildren:'./as/as.module#AsModule'},
  {path:'export',loadChildren:'./export/export.module#ExportModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
