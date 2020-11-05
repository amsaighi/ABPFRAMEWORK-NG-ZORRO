import { NgModule } from '@angular/core';
import { NavItemsModule } from '../nav-items/nav-items.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule, 
    HomeRoutingModule, 
    NavItemsModule],
})
export class HomeModule {}
