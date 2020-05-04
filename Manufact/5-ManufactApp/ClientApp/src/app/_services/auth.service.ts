import UserForLogin from 'src/app/models/auth/UserForLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5000/api/auth';
  }

  login(model: UserForLogin) {
    return this.http.post<string>(this.baseUrl + '/login', model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
