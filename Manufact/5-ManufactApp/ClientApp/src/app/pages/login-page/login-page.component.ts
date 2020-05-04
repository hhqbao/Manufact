import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() {
    document.title = 'Manufact - Sign In';
  }

  ngOnInit(): void {}
}
