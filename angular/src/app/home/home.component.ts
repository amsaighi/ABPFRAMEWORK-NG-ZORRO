import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

      nz-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
      `]
})
export class HomeComponent {

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService) {}

  login() {
    this.authService.initLogin();
  }
  logout() {
    this.authService.logout();
  }
}