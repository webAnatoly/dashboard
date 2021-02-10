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
      // https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension
      viewerApiExtension.on('itemWidgetCreated', (args: any) => this.onItemWidgetCreated(args));
      viewerApiExtension.on('itemWidgetOptionsPrepared', (args: any) => this.onItemWidgetOptionsPrepared(args));
    }
  }

  onDashboardBeforeRender(e: any): void {
    // const dashboardControl = e.component;
    // dashboardControl.registerExtension(new ViewerApiExtension(dashboardControl));
    // console.log('extensions', dashboardControl.extensions);
    console.log('onBeforeRender');

    // for (const property in dashboardControl.extensions) {
    //   console.log(property, dashboardControl.extensions[property]);
    // }
  }

  onItemWidgetOptionsPrepared(args: any): void {
    console.log('onItemWidgetOptionsPrepared');
    // how to work with the obtained widget see here
    // https://js.devexpress.com/DevExtreme/Guide/jQuery_Components/Component_Configuration_Syntax/
  }

  onItemWidgetCreated(args: any): void {
    const currentWidget = args.getWidget ? args.getWidget() : null;
    if (currentWidget) {
      this.customizeWidgets(args, 'onItemWidgetCreated');
    }
  }

  onItemWidgetUpdating(args: any): void {
    const currentWidget = args.getWidget ? args.getWidget() : null;
    if (currentWidget) {
      this.customizeWidgets(args, 'onItemWidgetUpdating');
    }
  }

  onItemWidgetUpdated(args: any): void {
    const currentWidget = args.getWidget ? args.getWidget() : null;
    if (currentWidget) {
      this.customizeWidgets(args, 'onItemWidgetUpdated');
    }
  }

  customizeWidgets(args: any, eventName: string): void {

    console.log('Event name: ', eventName + '\n' + 'Widget name: ', args.itemName);

    if (args.itemName === 'gridSalesByState') {
      console.log('works!!!!!!!!!!!');
      const grid = args.GetWidget();
      grid.option({
        hoverStateEnabled: true
      });
    }
    if (args.itemName === 'chartSalesByCategory') {
      const chart = args.getWidget();
      console.log('works2!!!!!!!!! chart', chart);
      chart.option({
        tooltip: {
          enabled: false,
        },
        title: {
          text: 'Удалось задать заголовок',
          subtitle: {
            text: 'Удалось задать подзаголовок'
          }
        },
        onArgumentAxisClick: (info: any) => {
          info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip();
        }
      });
    }
    if (args.itemName === 'pieDashboardItem1') {
      const pie = args.GetWidget()[0];
      pie.option({
        legend: {
          visible: true,
          border: {
            visible: true
          }
        }
      });
    }
  }

}
