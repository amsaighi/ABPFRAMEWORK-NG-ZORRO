import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [
  {
    path: 'header',
    component : HeaderComponent
  },
  {
    path: 'language',
    component : LanguageComponent
  },
  {
    path: 'menu',
    component : MenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
