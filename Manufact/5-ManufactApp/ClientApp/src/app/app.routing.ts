import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
    ],
  },
];
