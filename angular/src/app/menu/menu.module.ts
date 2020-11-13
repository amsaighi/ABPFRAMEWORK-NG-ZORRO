import { NgModule } from '@angular/core';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
const COMPONENTS = [
  MenuComponent
];
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
