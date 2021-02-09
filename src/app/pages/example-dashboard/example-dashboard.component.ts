import { Component, OnInit } from '@angular/core';
// import { ViewerApiExtension } from 'devexpress-dashboard';

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
    const dashboardControl = e.component;
    const viewerApiExtension = dashboardControl.findExtension('viewerApi');
    if (viewerApiExtension) {
      console.log('found extension !!!!');
      viewerApiExtension.on('itemWidgetCreated', (args: any) => this.onItemWidgetCreated(args));
      // https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension
    } else {
      console.log('not found extension');
    }
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

  onItemWidgetCreated(args: any): void {
    console.log('onItemWidgetCreated', args.itemName);
  }

}
