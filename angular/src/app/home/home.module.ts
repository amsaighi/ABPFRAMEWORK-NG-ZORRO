import { NgModule } from '@angular/core';
import { CoreSharedModule } from '../core/core.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const MODULE = [
  SharedModule, 
  HomeRoutingModule, 
  CoreSharedModule
];
const COMPONENTS = [
  HomeComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULE
  ]
    ,
})
export class HomeModule {}
