import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THEMES } from '../../constants/themes.constant';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  FILE_NAME = 'theme.service.ts';

  /** Holds currently active theme name */
  currentTheme$: BehaviorSubject<string>;

  constructor() {
    this.currentTheme$ = new BehaviorSubject<string>(THEMES.GREEN);
  }

  /**
   * Emits a new theme name to apply
   */
  setTheme(theme: string) {
    console.log(`${this.FILE_NAME}: Setting new theme: ${theme}`);
    this.currentTheme$.next(theme);
  }
}
