import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  apiUrl: string = 'http://localhost:4201/login';

  isLoggedIn: boolean = this.isUserLogged();

  login(authData: any) {
    return this.http.post(this.apiUrl, authData);
  }

  logUser(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn = true;
  }

  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  isUserLogged() {
    return localStorage.getItem('token') != null;
  }
}
