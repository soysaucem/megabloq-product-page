import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/analytics/event.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-click-tracking',
  templateUrl: './click-tracking.component.html',
  styleUrls: ['./click-tracking.component.scss']
})
export class ClickTrackingComponent implements OnInit {

  private currentDate = new Date();

  purchaseEventData: any;
  totalEventData: any;
  totalVisitorData: any;

  filterDate: Array<number>;
  label: string;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];
  barChartData: ChartDataSets[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.setBarChartLabels7Days();
    this.getPurchaseEventData();
    this.getTotalEventData();
    this.getTotalVisitorData();
  }

  getPurchaseEventData() {
    this.eventService.getPurchaseLinkEvents().subscribe(
      data => {
        this.purchaseEventData = data[0].dates[0].items
          .filter(item => item.action_title === 'Get-Started Button Clicked');
        this.handleRawDataTime(this.purchaseEventData);
        this.showLast7DaysData(this.purchaseEventData,
          'Number of "purchase" link clicks');
      }
    );
  }

  getTotalEventData() {
    this.eventService.getTotalEvents().subscribe(
      data => {
        this.totalEventData = data[0].dates[0].items;
        this.handleRawDataTime(this.totalEventData);
        this.showLast7DaysData(this.totalEventData,
          'Total actions on page (pageview, event, etc)');
      }
    );
  }

  getTotalVisitorData() {
    this.eventService.getTotalVisitors().subscribe(
      data => {
        this.totalVisitorData = data[0].dates;
        this.showLast7DaysVisitors(this.totalVisitorData,
          'Total visitors');
      }
    );
  }

  convertToDate(timestamp: string): Date {
    return new Date(Number(timestamp) * 1000);
  }

  handleRawDataTime(data: any) {
    data.forEach(item => item.time = this.convertToDate(item.time));
  }

  showLast7DaysData(data: any, label: string) {
    const eventCount = [];

    for (let i = 6; i >= 0; i--) {
      const neededDate = new Date(this.currentDate.getTime()
        - (i * 24 * 60 * 60 * 1000));
      const neededDateData = data.filter(item => {
        return item.time.getDate() === neededDate.getDate()
          && item.time.getMonth() === neededDate.getMonth()
          && item.time.getFullYear() === neededDate.getFullYear();
      });
      eventCount.push(neededDateData.length);
    }
    this.barChartData.push({data: eventCount, label, backgroundColor: this.generateColor()});
    console.log(eventCount);
  }

  showLast7DaysVisitors(data: any, label: string) {
    const visitorCount = [];

    for (let i = 6; i >= 0; i--) {
      visitorCount.push(data[i].items[0].value);
    }
    this.barChartData.push({data: visitorCount, label, backgroundColor: this.generateColor()});
  }

  setBarChartLabels7Days() {
    for (let i = 6; i >= 0; i--) {
      const neededDate = new Date(this. currentDate.getTime()
        - (i * 24 * 60 * 60 * 1000));
      this.barChartLabels
        .push(`${neededDate.getDate()}/${neededDate.getMonth() + 1}`);
    }
  }

  generateColor(): string {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return `rgb(${x}, ${y}, ${z})`;
  }
}
