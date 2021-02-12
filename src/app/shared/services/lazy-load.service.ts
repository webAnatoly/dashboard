import {Inject, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class SimpleObject {
  value: number | string = 'theme-light';
  name = 'Светлая тема';
  icon?: string;
  badge?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  /*
    value должы совпадать с именами css файлов, прописанных в angular.json
    Как получать их динамически я пока не придумал, поэтому приходится писать их и там и тут.
  */
  private static themeNames: SimpleObject[] = [
    { value: 'theme-light', name: 'Светлая тема' },
    { value: 'theme-dark', name: 'Темная тема' },
    { value: 'theme-greenmist', name: 'Зеленый туман' },
    { value: 'theme-darkmoon', name: 'Лунная ночь' },
  ];

  static getThemeNames(): SimpleObject[] {
    return LazyLoadService.themeNames;
  }

  loadStyle(styleName: string | void): void {

    const defaultThemeName = 'theme-light';

    const pathToStyle = styleName ? `${styleName}.css` : `${defaultThemeName}.css`;

    const head = this.document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById('css-global-theme-dashboard') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = pathToStyle;
    } else {
      const theStyle = this.document.createElement('link');
      theStyle.id = 'css-global-theme-dashboard';
      theStyle.rel = 'stylesheet';
      theStyle.href = pathToStyle;

      head.appendChild(theStyle);
    }
  }

  updateTheme(styleName: string): void {
    localStorage.setItem('customThemeName', styleName);
    window.location.reload();
  }
}
