import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { SharedModule } from '../shared/shared.module';
const COMPONENTS = [
  RouteComponent
];
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    CommonModule,
    RouteRoutingModule,
    SharedModule
  ]
})
export class RouteModule { }
