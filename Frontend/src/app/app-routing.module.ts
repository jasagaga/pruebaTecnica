import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks/tasks.page').then(m => m.TasksPage)
  },
  {
    path: 'task-form',
    loadComponent: () =>
      import('./pages/task-form/task-form.page').then(m => m.TaskFormPage)
  },
  {
    path: 'task-form/:id',
    loadComponent: () =>
      import('./pages/task-form/task-form.page').then(m => m.TaskFormPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
