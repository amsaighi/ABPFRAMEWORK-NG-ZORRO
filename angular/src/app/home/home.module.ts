import { NgModule } from '@angular/core';
import { NavItemsModule } from '../nav-items/nav-items.module';
import { RouteModule } from '../route/route.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const MODULE = [
  SharedModule, 
  HomeRoutingModule, 
  NavItemsModule,
  RouteModule
];
@NgModule({
  declarations: [HomeComponent],
  imports: [MODULE],
})
export class HomeModule {}
