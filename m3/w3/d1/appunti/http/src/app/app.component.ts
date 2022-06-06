import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];

  constructor(private httpPippo: HttpClient) {
    //http adesso contiene tutti i metodi per fare chiamate ajax
  }

  fetchUsersPippo() {
    //chiamata get. Andiamo a riempire l'array users.
    this.httpPippo
      .get<{ data: User[] }>('https://reqres.in/api/users?page=2')
      .pipe(map((res) => res.data))
      .subscribe((res) => {
        this.users = res;
      });
  }
}
