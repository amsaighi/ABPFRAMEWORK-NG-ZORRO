import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
    <!-- <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout> -->
  `,
})
export class AppComponent implements OnInit {
  constructor( ) {}
  ngOnInit() {}
}
