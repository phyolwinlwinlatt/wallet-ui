import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [AgCharts, MatIconModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css',
})
export class DonutChartComponent {
  chartOptions!: AgChartOptions;

  constructor() {
    this.chartOptions = {
      data: [
        { asset: 'Supermarkets', amount: 186.65 },
        { asset: 'Transfers', amount: 207.82 },
        { asset: 'Restaurants', amount: 197.25 },
        { asset: 'Cash', amount: 340 },
        { asset: 'Study', amount: 500.85 },
        { asset: 'Other', amount: 93.04 },
      ],
      series: [
        {
          type: 'donut',
          calloutLabelKey: 'asset',
          angleKey: 'amount',
          innerRadiusRatio: 0.8,
          fills: [
            '#9A1EFC',
            '#F466AC',
            '#2A75FE',
            '#54C6FF',
            '#F03F6B',
            '#fff',
          ],
          innerLabels: [
            {
              text: 'Total Investment',
              fontWeight: 'bold',
            },
            {
              text: '$100,000',
              spacing: 4,
              fontSize: 48,
              color: 'red',
            },
          ],
          innerCircle: {
            fill: '#fff',
          },
          showInLegend: false,
        },
      ],
      background: {
        visible: false,
      },
      height: 200,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    };
  }
}
