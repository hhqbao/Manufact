import { DialogService } from './_services/dialog.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, LoginFormComponent],
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
