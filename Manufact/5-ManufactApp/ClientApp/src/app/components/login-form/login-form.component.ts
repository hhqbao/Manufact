import { DialogService } from './../../_services/dialog.service';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import UserForLogin from 'src/app/models/auth/UserForLogin';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  model: UserForLogin;

  constructor(
    private authService: AuthService,
    private dialogService: DialogService
  ) {
    this.model = new UserForLogin();
  }

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.model).subscribe(
      (_) => {
        this.dialogService.success('Signed in successfully!');
      },
      (error) => this.dialogService.error(error)
    );
  }
}
