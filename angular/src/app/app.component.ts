import { Component, OnInit } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core'; // imported ReplaceableComponentsService
// import { MenuComponent } from './menu/menu.component'; // imported NavItemsComponent
import { eThemeBasicComponents, NavItemsComponent } from '@abp/ng.theme.basic'; // imported eThemeBasicComponents

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
    <!-- <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout> -->
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private replaceableComponents: ReplaceableComponentsService
    ) {} // injected ReplaceableComponentsService

  ngOnInit() {
    //...

    this.replaceableComponents.add({
        component: NavItemsComponent,
        key: eThemeBasicComponents.NavItems,
      });
  }
}
