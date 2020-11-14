import { Component, AfterViewInit } from '@angular/core';
import {
    ApplicationConfiguration,
    AuthService,
    ConfigState,
    SessionState,
    SetLanguage,
  } from '@abp/ng.core';
  import { Navigate, RouterState } from '@ngxs/router-plugin';
  import { Select, Store } from '@ngxs/store';
  import { Observable, fromEvent } from 'rxjs';
  import { map, debounceTime } from 'rxjs/operators';
  import snq from 'snq';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styles: [``]
})
export class LanguageComponent implements AfterViewInit {
    @Select(ConfigState.getOne('currentUser'))
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
  
    @Select(ConfigState.getDeep('localization.languages'))
    languages$: Observable<ApplicationConfiguration.Language[]>;
  
    smallScreen = window.innerWidth < 992;
  
    get defaultLanguage$(): Observable<string> {
      return this.languages$.pipe(
        map(
          languages =>
            snq(
              () => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName,
            ),
          '',
        ),
      );
    }
  
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]> {
      return this.languages$.pipe(
        map(
          languages =>
            snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)),
          [],
        ),
      );
    }
  
    get selectedLangCulture(): string {
      return this.store.selectSnapshot(SessionState.getLanguage);
    }
  
    constructor(private store: Store, private authService: AuthService) {
      console.log("this is language")
    }
  
    ngAfterViewInit() {
      fromEvent(window, 'resize')
        .pipe(debounceTime(150))
        .subscribe(() => {
          this.smallScreen = window.innerWidth < 992;
        });
    }
  
    onChangeLang(cultureName: string) {
      this.store.dispatch(new SetLanguage(cultureName));
      console.log(cultureName);
    }
  
    // logout() {
    //   this.authService.logout().subscribe(() => {
    //     this.store.dispatch(
    //       new Navigate(['/'], null, {
    //         state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
    //       }),
    //     );
    //   });
    // }
}
