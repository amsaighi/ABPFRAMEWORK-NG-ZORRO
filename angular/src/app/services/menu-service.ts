import { RoutesService } from '@abp/ng.core';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { getAbpMenu } from './config';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private routes : RoutesService
  ) {
    this.routes.remove(['AbpAccount::Menu:Account']);
    this.routes.remove(['AbpAccount::Login']);
    this.routes.remove(['AbpIdentity::Menu:IdentityManagement']);
    this.routes.remove(['AbpIdentity::Menu:IdentityManagement']);
    this.routes.remove(['AbpTenantManagement::Tenants']);
    this.routes.remove(['AbpAccount::Menu:Account']);
    this.routes.remove(['AbpIdentity::Menu:IdentityManagement']);
    this.routes.remove(['AbpTenantManagement::Menu:TenantManagement']);
    this.routes.remove(['AbpSettingManagement::Settings']);
    this.routes.remove(['AbpUiNavigation::Menu:Administration']);

  }
  getAbpMenuData() : Observable<any[]>{
    return of(getAbpMenu)   
  }
}
