import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-dashboard',
  templateUrl: './example-dashboard.component.html',
  styleUrls: ['./example-dashboard.component.scss']
})
export class ExampleDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDashboardInit(e: any): void {
    console.log('Dashboard initialized', e);
  }

  onBeforeRender(e: any): void {
    // const dashboardControl = e.component;
    // dashboardControl.registerExtension(new ViewerApiExtension(dashboardControl));
    // console.log('extensions', dashboardControl.extensions);
    console.log('onBeforeRender');

    // for (const property in dashboardControl.extensions) {
    //   console.log(property, dashboardControl.extensions[property]);
    // }
  }

  onItemWidgetCreated(item: any): void {
    console.log('onItemWidgetCreated');
  }

}
