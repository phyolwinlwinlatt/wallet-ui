import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { calculateValueChangedPercent } from '../../../../shared/utils/general';

export interface Investment {
  icon: string;
  title: string;
  description: string;
  todayValue: number;
  yesterdayValue: number;
}

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [NgClass, CurrencyPipe, MatIconModule, AvatarComponent],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css',
})
export class InvestmentComponent {
  @Input() data: Investment[] = [];

  calculateValueChangedPercent = calculateValueChangedPercent;
}
