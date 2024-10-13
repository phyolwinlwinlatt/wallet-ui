import { Component } from '@angular/core';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { Goal, GoalsComponent } from './components/goals/goals.component';
import {
  Transaction,
  TransactionsComponent,
} from './components/transactions/transactions.component';
import {
  Investment,
  InvestmentComponent,
} from './components/investment/investment.component';
import {
  QuickTransfer,
  QuickTransfersComponent,
} from './components/quick-transfers/quick-transfers.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MetricsComponent,
    GoalsComponent,
    TransactionsComponent,
    InvestmentComponent,
    QuickTransfersComponent,
    BarChartComponent,
    AreaChartComponent,
    DonutChartComponent,
    MyCardsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  goals: Goal[] = [
    {
      icon: 'flight',
      goalName: 'Trip',
      targetAmount: 20000,
      currentAmount: 10576,
    },
    {
      icon: 'home',
      goalName: 'House',
      targetAmount: 180000,
      currentAmount: 54637,
    },
    {
      icon: 'photo_camera',
      goalName: 'Camera',
      targetAmount: 4650,
      currentAmount: 983,
    },
    // {
    //   icon: 'directions_car',
    //   goalName: 'Car',
    //   targetAmount: 50000,
    //   currentAmount: 30000,
    // },
  ];

  transactions: Transaction[] = [
    {
      icon: 'sync_alt',
      title: 'Alex T.',
      description: 'Transfers',
      amount: 300,
      type: 'Debit card',
      flow: 'in',
    },
    {
      icon: 'local_taxi',
      title: 'Uber',
      description: 'Taxi',
      amount: 19.84,
      type: 'Debit card',
      flow: 'out',
    },
    {
      icon: 'local_mall',
      title: 'Metro',
      description: 'Supermarkets',
      amount: 85.29,
      type: 'Debit card',
      flow: 'out',
    },
    {
      icon: 'payments',
      title: 'Cashback',
      description: 'Rewards',
      amount: 4.5,
      type: 'Debit card',
      flow: 'in',
    },
  ];

  investments: Investment[] = [
    {
      icon: 'account_balance',
      title: 'AAPL',
      description: 'Apple Inc.',
      todayValue: 3204.05,
      yesterdayValue: 3000,
    },
    {
      icon: 'account_balance',
      title: 'TSLA',
      description: 'Tesla',
      todayValue: 8547.05,
      yesterdayValue: 8700,
    },
    {
      icon: 'account_balance',
      title: 'NFLX',
      description: 'Netflix',
      todayValue: 1210.05,
      yesterdayValue: 1217,
    },
    {
      icon: 'account_balance',
      title: 'AMZN',
      description: 'Amazon',
      todayValue: 14367.05,
      yesterdayValue: 14167,
    },
  ];

  quickTransfers: QuickTransfer[] = [
    {
      name: 'Alexander Abramson',
      account: '*******2110',
      icon: 'person',
    },
    {
      name: 'Julia Davidson',
      account: '*******1231',
      icon: 'person',
    },
    {
      name: 'Andrew Evans',
      account: '*******4355',
      icon: 'person',
    },
    {
      name: 'Steven Philips',
      account: '*******2255',
      icon: 'person',
    },
  ];
}
