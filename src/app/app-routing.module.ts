import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pc2Component } from './pc2/pc2.component';

const routes: Routes = [

  {path: '/Home',component: Pc2Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
