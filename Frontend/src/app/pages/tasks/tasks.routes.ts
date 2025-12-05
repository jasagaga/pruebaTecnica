import { Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth-guard';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./tasks.page').then(m => m.TasksPage)
  }
];
