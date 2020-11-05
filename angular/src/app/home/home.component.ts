import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core'; // imported ReplaceableComponentsService
import { OAuthService } from 'angular-oauth2-oidc';
import { eThemeBasicComponents } from '@abp/ng.theme.basic'; // imported eThemeBasicComponents
import { NavItemsComponent } from '../nav-items/nav-items.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 360px;
      }

      nz-footer {
        text-align: center;
      }`]
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService,
    private replaceableComponents: ReplaceableComponentsService) {}

  login() {
    this.authService.initLogin();
  }

  ngOnInit() {
    this.replaceableComponents.add({
        component: NavItemsComponent,
        key: eThemeBasicComponents.NavItems,
      });
  }
}
