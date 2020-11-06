import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    template:`
     <input type="search" placeholder="Search" class="bg-transparent border-0 color-white" />
    `,
})
export class SearchComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
