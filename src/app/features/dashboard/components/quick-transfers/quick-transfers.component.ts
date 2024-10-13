import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';

export interface QuickTransfer {
  name: string;
  account: string;
  icon: string;
}

@Component({
  selector: 'app-quick-transfers',
  standalone: true,
  imports: [MatIconModule, AvatarComponent],
  templateUrl: './quick-transfers.component.html',
  styleUrl: './quick-transfers.component.css',
})
export class QuickTransfersComponent {
  @Input() data: QuickTransfer[] = [];
}
