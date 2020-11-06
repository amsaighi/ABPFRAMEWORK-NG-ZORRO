import { NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { NavItemsModule } from '../nav-items/nav-items.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const MODULE = [
  SharedModule, 
  HomeRoutingModule, 
  NavItemsModule,
  MenuModule
];
@NgModule({
  declarations: [HomeComponent],
  imports: [MODULE],
})
export class HomeModule {}
