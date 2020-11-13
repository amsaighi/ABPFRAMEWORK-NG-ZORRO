
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { LanguageComponent } from './language/language.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

const COMPENENTS = [
  LanguageComponent,
  HeaderComponent
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
export class CoreModule { }
