import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClassToggleDirective } from './_directives/class-toggle.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { LoadingPanelComponent } from './components/loading-panel/loading-panel.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthService } from './_services/auth.service';
import { AdminLeftNavComponent } from './components/admin-left-nav/admin-left-nav.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { DialogService } from './_services/dialog.service';
import { appRoutes } from './app.routing';
import { LeftNavTriggerDirective } from './_directives/left-nav-trigger.directive';
import { DropdownBtnDirective } from './_directives/dropdown-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavTriggerDirective,
    DropdownBtnDirective,
    ClassToggleDirective,
    LoginPageComponent,
    LoginFormComponent,
    AdminLayoutComponent,
    AdminNavBarComponent,
    AdminLeftNavComponent,
    LoadingPanelComponent,
    DashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService, ErrorInterceptorProvider, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
