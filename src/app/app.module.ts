import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxDataGridModule, DxDropDownButtonModule } from 'devextreme-angular';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';

import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ExampleDashboardComponent } from './pages/example-dashboard/example-dashboard.component';
import { ExampleDevextremeComponent } from './pages/example-devextreme/example-devextreme.component';
import { HomeComponent } from './pages/home/home.component';
import { LazyLoadService } from './shared/services/lazy-load.service';

export function initApp(): () => Promise<any>  {
  return () => {
    return new Promise((resolve) => {
      // Тут можно выполнять всякие действия, которые требуется выполнять во время инициализации приложения

      // Подключаем файл стилей темы для Dashboard
      const themeName = localStorage.getItem('customThemeName'); // получить имя сохраненной темы
      const lazyLoadCss = new LazyLoadService(document);
      if (themeName) {
        lazyLoadCss.loadStyle(themeName);
      } else {
        lazyLoadCss.loadStyle();
      }

      resolve(true);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ExampleDashboardComponent,
    ExampleDevextremeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxDashboardControlModule,
    DxDropDownButtonModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
