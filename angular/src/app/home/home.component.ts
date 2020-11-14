import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core'; // imported ReplaceableComponentsService
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

  constructor( ) {}

}
