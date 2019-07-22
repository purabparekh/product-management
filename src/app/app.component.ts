import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './shared/services/themes/theme.service';
import { Subscription } from 'rxjs';
import { LANGUAGES } from './shared/constants/languages.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  @HostBinding('class') componentCssClass;

  appLanguage = null;

  /**
   * Subscription to a theme change event
   */
  themeSubscription: Subscription;

  constructor(
    public overlayContainer: OverlayContainer,
    private translate: TranslateService,
    private themeService: ThemeService,
  ) {
    this.appLanguage = LANGUAGES[0];
    const languageCode = translate.currentLang || this.appLanguage.code;
    translate.setDefaultLang(languageCode);

    /**
     * Subscribes to the theme change event, and calls switchTheme method
     */
    this.themeSubscription = this.themeService.currentTheme$.subscribe(this.switchTheme.bind(this));
  }

  /**
   * Unsubscribe from theme subscription when the component destroys
   */
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  /**
   * Updates the currently used app langauge
   */
  switchLanguage(event) {
    const newLanguage = event.target.value;
    this.appLanguage = LANGUAGES.find(
      language => language.code === newLanguage
    );
    this.translate.use(newLanguage);
  }

  /**
   * Applies the newly selected theme to overlay container
   */
  switchTheme(newTheme: string) {
    this.overlayContainer.getContainerElement().classList.add(newTheme);
    this.componentCssClass = newTheme;
    console.log(`app.component.ts: New theme applied: ${newTheme}`);
  }
}
