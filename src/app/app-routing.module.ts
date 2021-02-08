import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleDashboardComponent } from './pages/example-dashboard/example-dashboard.component';
import { ExampleDevextremeComponent } from './pages/example-devextreme/example-devextreme.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: ExampleDashboardComponent },
  { path: 'devextreme', component: ExampleDevextremeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
