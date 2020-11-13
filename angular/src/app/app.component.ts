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

  constructor(private navItems: NavItemsService) {
    navItems.addItems([
      {
        id: 'MySearchInput',
        order: 1,
        component: SearchComponent,
      },
      {
        id: 'SignOutIcon',
        html: '<i class="fas fa-sign-out-alt fa-lg text-white m-2"><i>',
        action: () => console.log('Clicked the sign out icon'),
        order: 101, // puts as last element
      },
    ]);
  }
}
