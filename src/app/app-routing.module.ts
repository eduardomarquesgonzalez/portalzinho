import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CgmComponent } from './views/cgm/cgm.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'',component: CgmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
