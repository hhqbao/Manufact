import { DialogService } from './dialog.service';
import UserForLogin from 'src/app/models/auth/UserForLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string;
  private jwtHelper: JwtHelperService;
  decodedToken: any;

  constructor(private http: HttpClient, private dialogService: DialogService) {
    this.baseUrl = 'http://localhost:5000/api/auth';
    this.jwtHelper = new JwtHelperService();
  }

  login(model: UserForLogin) {
    return this.http.post<string>(this.baseUrl + '/login', model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
          this.decodedToken = this.jwtHelper.decodeToken(response.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut() {
    localStorage.removeItem('token');
    this.decodedToken = null;
    this.dialogService.message('You have been logged out!');
  }
}
