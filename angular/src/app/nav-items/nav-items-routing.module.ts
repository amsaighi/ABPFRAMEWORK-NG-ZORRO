import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavItemsComponent } from './nav-items.component';

const routes: Routes = [{ path: '', component: NavItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavItemsRoutingModule { }
