import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css',
})
export class CreditCardComponent {
  @Input() color: string;

  get classes() {
    switch (this.color) {
      case 'purple':
        return 'bg-gradient-to-br from-blue via-blue-light to-purple';
      default:
        return 'bg-gradient-to-br from-cherry-light via-cherry-light to-cherry';
    }
  }
}
