import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
