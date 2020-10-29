import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';

// antd components module
import { AntdModule } from 'src/app/antd.module'

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  CoreModule.forRoot({
    environment,
  }),
  ThemeSharedModule.forRoot(),
  AccountConfigModule.forRoot(),
  IdentityConfigModule.forRoot(),
  TenantManagementConfigModule.forRoot(),
  SettingManagementConfigModule.forRoot(),
  NgxsModule.forRoot(),
  ThemeBasicModule.forRoot(),
  AntdModule
]
@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule { }
