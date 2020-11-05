import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavItemsRoutingModule } from './nav-items-routing.module';
import { NavItemsComponent } from './nav-items.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  NavItemsComponent
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    SharedModule,
    NavItemsRoutingModule
  ]
})
export class NavItemsModule { }
