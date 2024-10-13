import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CreditCardComponent } from '../../../../shared/components/credit-card/credit-card.component';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [MatIconModule, CreditCardComponent],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.css',
})
export class MyCardsComponent {}
