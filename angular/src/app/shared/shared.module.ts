import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AntdModule } from '../antd.module';
const MODULE = [
  CoreModule,
  ThemeSharedModule,
  ThemeBasicModule,
  NgbDropdownModule,
  NgxValidateCoreModule,
  AntdModule
];
  
@NgModule({
  declarations: [],
  imports: [MODULE],
  exports: [MODULE],
  providers: []
})
export class SharedModule {}
