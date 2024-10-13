import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.css',
})
export class AreaChartComponent {
  chartOptions!: AgChartOptions;

  constructor() {
    this.chartOptions = {
      data: [
        { month: 'Jan', '2020': 5000, '2021': 10000 },
        { month: 'Feb', '2020': 6000, '2021': 12000 },
        { month: 'Mar', '2020': 4000, '2021': 8000 },
        { month: 'Apr', '2020': 10000, '2021': 5000 },
        { month: 'May', '2020': 8000, '2021': 16000 },
        { month: 'Jun', '2020': 15000, '2021': 7500 },
        { month: 'Jul', '2020': 9000, '2021': 4500 },
        { month: 'Aug', '2020': 2700, '2021': 6000 },
        { month: 'Sep', '2020': 4000, '2021': 8000 },
        { month: 'Oct', '2020': 2000, '2021': 4000 },
        { month: 'Nov', '2020': 6000, '2021': 3000 },
        { month: 'Dec', '2020': 18000, '2021': 9000 },
      ],
      series: [
        {
          type: 'area',
          xKey: 'month',
          yKey: '2020',
          yName: '2020',
          interpolation: { type: 'smooth' },
          fill: '#F9D8E5',
          stroke: '#F466AC',
          strokeWidth: 2, //#EAF3FE (border: #C8E3FE), light: "#F9D8E5",
        },
        {
          type: 'area',
          xKey: 'month',
          yKey: '2021',
          yName: '2021',
          interpolation: { type: 'smooth' },
          fill: '#E8EBFD',
          stroke: '#919AFF',
          strokeWidth: 2,
        },
      ],
      legend: {
        position: 'top',
        item: {
          marker: {
            shape: 'circle',
            size: 20,
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
