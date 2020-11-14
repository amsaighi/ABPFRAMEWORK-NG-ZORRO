import { Component, OnInit } from '@angular/core';
import { NavItemsService } from '@abp/ng.theme.shared';
import { SearchComponent } from './core/search.component';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
    <!-- <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout> -->
  `,
})
export class AppComponent {

}
