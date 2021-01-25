import { Router } from '@angular/router';
import {
  Component, OnInit,
} from '@angular/core';
import { MenuService } from 'src/app/services/menu-service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  abpMenuData;
  antMenuDataActivated: any[] = [];
  name: string;
  url: string;
  children: string;

  constructor(
    private menuService: MenuService) 
    {
    this.menuService.getAbpMenuData().subscribe(abpMenuData => (
      this.abpMenuData = abpMenuData
    ))
  }

  ngOnInit() {
    this.activateAbpMenu();
  }

  activateAbpMenu(abpMenuData = this.abpMenuData) {
    abpMenuData = JSON.parse(JSON.stringify(abpMenuData));
    abpMenuData.forEach( 
      element => {
        let antMenu = Object.create(
          {
            url: element['path'],
            title: element['name'],
            role: element['requiredPolicy'],
            children: element['children'],
          })

        if (element["children"] != null && element["children"] != undefined) {
          let abpChildern = element["children"];

          let antChildern = [];

          abpChildern.forEach( // for children
            _element => {
              let antChildMenu = Object.create(
                {
                  url: _element['path'],
                  title: _element['name'],
                  role: _element['requiredPolicy'],
                  children: _element['children'],

                })
              antChildern.push(antChildMenu);
            })
          antMenu.children = antChildern;
          antMenu.category = true;
        }
        this.antMenuDataActivated.push(antMenu);
      }      
    )
  }
}
