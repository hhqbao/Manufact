import { AuthService } from './../../_services/auth.service';
import { DialogService } from './../../_services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private authService: AuthService
  ) {
    document.title = 'Manufact - Sign In';
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/admin']);
    }
  }

  onLoginCallback = (): void => {
    this.dialogService.success('Login Successfully');
    this.router.navigate(['/admin']);
  };
}
