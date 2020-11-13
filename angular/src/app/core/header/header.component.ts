import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
    .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 30px 16px 0;
        float: left;
      }

      .header-menu {
        line-height: 64px;
      }
    `]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
