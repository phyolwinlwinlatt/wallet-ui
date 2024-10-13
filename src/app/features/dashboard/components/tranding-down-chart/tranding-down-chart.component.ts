import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-tranding-down-chart',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './tranding-down-chart.component.html',
  styleUrl: './tranding-down-chart.component.css',
})
export class TrandingDownChartComponent {
  chartOptions!: AgChartOptions;

  constructor() {
    this.chartOptions = {
      data: [
        // { month: 'Jan', '2020': 788 },
        // { month: 'Feb', '2020': 6000 },
        // { month: 'Mar', '2020': 4000 },
        { month: 'Apr', '2020': 10000 },
        { month: 'May', '2020': 8000 },
        { month: 'Jun', '2020': 15000 },
        { month: 'Jul', '2020': 9000 },
        { month: 'Aug', '2020': 2700 },
        { month: 'Sep', '2020': 4000 },
        { month: 'Oct', '2020': 2000 },
        // { month: 'Nov', '2020': 6000 },
        // { month: 'Dec', '2020': 18000 },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          label: {
            enabled: false, // Disable x-axis labels
          },
          line: {
            width: 0, // Optional: Hide x-axis line if you don't want it
          },
          gridLine: {
            enabled: false,
          },
          paddingInner: 0,
          paddingOuter: 0,
        },
        {
          type: 'number',
          position: 'left',
          label: {
            enabled: false, // Disable y-axis labels
          },
          line: {
            width: 0, // Optional: Hide y-axis line if you don't want it
          },
          gridLine: {
            enabled: false,
          },
        },
      ],
      series: [
        {
          type: 'area',
          xKey: 'month',
          yKey: '2020',
          yName: '2020',
          interpolation: { type: 'smooth' },
          fill: '#EAF3FE', //919AFF EADDFE,////#EAF3FE (border: #C8E3FE), #E8EBFD (border: #919AFF) // gradient (border also gri)
          strokeWidth: 2,
          stroke: '#C8E3FE',
        },
      ],
      background: {
        visible: false,
      },
      height: 100,
      width: 80,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    };
  }
}
