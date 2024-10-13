import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';

export interface Transaction {
  icon: string;
  title: string;
  description: string;
  amount: number;
  type: string;
  flow: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgClass, CurrencyPipe, MatIconModule, AvatarComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  @Input() data: Transaction[] = [];
}
