import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BranchReleaseComponent} from '../app/cms/branch-release/branch-release.component'
import { CheckPrintingComponent } from './cms/check-printing/check-printing.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'branch-release', component:BranchReleaseComponent},
  {path:'check-printing', component:CheckPrintingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
