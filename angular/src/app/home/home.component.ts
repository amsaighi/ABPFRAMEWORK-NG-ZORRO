import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core'; // imported ReplaceableComponentsService
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

      .sider-menu {
        height: 100%;
        border-right: 0;
      }

      .inner-layout {
        padding: 0 24px 24px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
      `]
})
export class HomeComponent {
  isCollapsed = false;
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService,
  ) {}

  login() {
    this.authService.initLogin();
  }

  ngOnInit() {
 
  }
}
