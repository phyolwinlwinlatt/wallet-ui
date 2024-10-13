import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { calculatePercent } from '../../../../shared/utils/general';

export interface Goal {
  icon: string;
  goalName: string;
  targetAmount: number;
  currentAmount: number;
}

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CurrencyPipe, MatIconModule, MatProgressBarModule, AvatarComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  @Input() data: Goal[] = [];

  calculatePercent = calculatePercent;
}
