import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';

import { calculateValueChangedPercent } from '../../../../shared/utils/general';
import { TrandingUpChartComponent } from '../tranding-up-chart/tranding-up-chart.component';
import { TrandingDownChartComponent } from '../tranding-down-chart/tranding-down-chart.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass,
    MatIconModule,
    AgCharts,
    TrandingUpChartComponent,
    TrandingDownChartComponent,
  ],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css',
})
export class MetricsComponent {
  @Input() title!: string;
  @Input() thisMonthValue!: number;
  @Input() lastMonthValue!: number;

  chartOptions!: AgChartOptions;

  percentChanged!: number;

  constructor() {
    this.chartOptions = {
      data: [
        { month: 'Jan', '2020': 788 },
        { month: 'Feb', '2020': 6000 },
        { month: 'Mar', '2020': 4000 },
        { month: 'Apr', '2020': 10000 },
        { month: 'May', '2020': 8000 },
        { month: 'Jun', '2020': 15000 },
        { month: 'Jul', '2020': 9000 },
        { month: 'Aug', '2020': 2700 },
        { month: 'Sep', '2020': 4000 },
        { month: 'Oct', '2020': 2000 },
        { month: 'Nov', '2020': 6000 },
        { month: 'Dec', '2020': 18000 },
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
        },
      ],
      background: {
        visible: false,
      },
      height: 100,
      width: 150,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    };
  }

  ngOnInit() {
    this.percentChanged = calculateValueChangedPercent(
      this.lastMonthValue,
      this.thisMonthValue,
    );
  }
}
