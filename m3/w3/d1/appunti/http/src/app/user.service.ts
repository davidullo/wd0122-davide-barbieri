import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpPippo: HttpClient) {}

  apiUrl = 'https://reqres.in/api/users';

  getUsers() {
    return this.httpPippo
      .get<{ data: User[] }>(this.apiUrl + '?page=2')
      .pipe(map((res: any) => res.data)); //pulisco la chiamata col pipe dicendogli che voglio solo res.data
  }

  createUser(newUser: User) {
    return this.httpPippo.post<User>(this.apiUrl, newUser);
  }

  deleteUser(id: number) {
    return this.httpPippo.delete(this.apiUrl + '/' + id);
  }
}
