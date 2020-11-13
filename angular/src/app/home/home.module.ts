import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MenuModule } from '../menu/menu.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const MODULE = [
  SharedModule, 
  HomeRoutingModule, 
  MenuModule,
  CoreModule
];
const COMPONENTS = [
  HomeComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULE]
    ,
})
export class HomeModule {}
