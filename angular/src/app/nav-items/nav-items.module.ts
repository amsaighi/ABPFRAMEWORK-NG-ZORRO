import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavItemsRoutingModule } from './nav-items-routing.module';
import { NavItemsComponent } from './nav-items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavItemsComponent],
  exports: [NavItemsComponent],
  imports: [
    SharedModule,
    NavItemsRoutingModule
  ]
})
export class NavItemsModule { }
