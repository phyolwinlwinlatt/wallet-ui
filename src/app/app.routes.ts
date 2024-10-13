import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
];
