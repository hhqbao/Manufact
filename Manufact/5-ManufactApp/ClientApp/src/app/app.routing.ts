import { AdminHomePageComponent } from './pages/admin-pages/admin-home-page/admin-home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminHomePageComponent, pathMatch: 'full' },
    ],
  },
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
];
