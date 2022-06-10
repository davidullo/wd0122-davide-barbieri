import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:4201/login';

  isLoggedIn: boolean = false;

  login(authData: any) {
    return this.http.post(this.apiUrl, authData);
  }
}
