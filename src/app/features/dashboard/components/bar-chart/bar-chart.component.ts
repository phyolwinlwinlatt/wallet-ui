import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  chartOptions!: AgChartOptions;

  constructor() {
    this.chartOptions = {
      data: [
        { month: 'Feb', expenses: 2200, income: 2800 },
        { month: 'Mar', expenses: 500, income: 1300 },
        { month: 'Apr', expenses: 2500, income: 2100 },
        { month: 'May', expenses: 2000, income: 2900 },
        { month: 'Jun', expenses: 1800, income: 2200 },
        { month: 'Jul', expenses: 2700, income: 2800 },
      ],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'expenses',
          yName: 'Expenses',
          fill: '#919AFF',
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'income',
          yName: 'Income',
          fill: '#F9D8E5',
        },
      ],
      legend: {
        position: 'top',
        item: {
          marker: {
            shape: 'circle',
            size: 10,
          },
        },
      },
      background: {
        visible: false,
      },
      height: 200,
    };
  }
}
