import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ExampleDashboardComponent } from './pages/example-dashboard/example-dashboard.component';
import { ExampleDevextremeComponent } from './pages/example-devextreme/example-devextreme.component';
import { HomeComponent } from './pages/home/home.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
