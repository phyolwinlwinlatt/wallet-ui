import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface NavItem {
  icon: string;
  label: string;
  route: string;
  count: number;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  navLinks: NavItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      count: 0,
    },
    {
      icon: 'wallet',
      label: 'Wallet',
      route: '/wallet',
      count: 0,
    },
    {
      icon: 'sync_alt',
      label: 'Transactions',
      route: '/transactions',
      count: 1,
    },
    {
      icon: 'currency_exchange',
      label: 'Cashback',
      route: '/cashback',
      count: 4,
    },
    {
      icon: 'paid',
      label: 'Payments',
      route: '/payments',
      count: 0,
    },
    {
      icon: 'trending_up',
      label: 'Investment',
      route: '/investment',
      count: 0,
    },
    {
      icon: 'person',
      label: 'Profile',
      route: '/profile',
      count: 0,
    },
    {
      icon: 'help',
      label: 'Support',
      route: '/support',
      count: 0,
    },
  ];
}
