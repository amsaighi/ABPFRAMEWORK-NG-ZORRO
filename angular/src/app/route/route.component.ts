import { ABP } from '@abp/ng.core';
import {
  Component,
  HostBinding,
  Inject,
  Renderer2,
  TrackByFunction,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements AfterViewInit {

  @HostBinding('class.mx-auto')
  marginAuto = true;

  smallScreen = window.innerWidth < 992;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(150))
      .subscribe(() => {
        this.smallScreen = window.innerWidth < 992;
      });
  }

}
