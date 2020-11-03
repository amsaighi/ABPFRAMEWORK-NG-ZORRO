import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [BookComponent],
  imports: [
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
