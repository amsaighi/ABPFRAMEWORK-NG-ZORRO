
import { NgModule } from '@angular/core';
// ABP MODULE 
import { SharedModule } from '../shared/shared.module';

// Component we create
import { CoreRoutingModule } from './core-routing.module';
import { LanguageComponent } from './language/language.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


const COMPENENTS = [
  LanguageComponent,
  HeaderComponent,
  MenuComponent,
];
const MODULES  = [
  SharedModule,
  CoreRoutingModule
];
@NgModule({
  declarations: [
    ...COMPENENTS
  ],
  exports :[
    ...COMPENENTS
  ],
  imports: [
    ...MODULES
  ]
})
export class CoreSharedModule { }
