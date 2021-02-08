import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExampleDashboardComponent } from './pages/example-dashboard/example-dashboard.component';
import { ExampleDevextremeComponent } from './pages/example-devextreme/example-devextreme.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: ExampleDashboardComponent },
  { path: 'devextreme', component: ExampleDevextremeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
