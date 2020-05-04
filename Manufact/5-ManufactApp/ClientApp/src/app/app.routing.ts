import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
];
