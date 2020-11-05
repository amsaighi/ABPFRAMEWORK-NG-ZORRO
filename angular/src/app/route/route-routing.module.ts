import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './route.component';

const routes: Routes = [{ path: '', component: RouteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
