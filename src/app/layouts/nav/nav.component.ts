import { Component, OnInit } from '@angular/core';

import { LazyLoadService, SimpleObject } from '../../shared/services/lazy-load.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  lazyLoadTheme: any;
  themeNames: SimpleObject[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lazyLoadTheme = new LazyLoadService(document);
    this.themeNames = LazyLoadService.getThemeNames();
  }

  onThemeNameClick(event: any): void {
    if (this.lazyLoadTheme.updateTheme) {
      this.lazyLoadTheme.updateTheme(event.itemData.value);
    }
  }

}
