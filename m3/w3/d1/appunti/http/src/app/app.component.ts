import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];
  isLoading: boolean = false;

  newUser: User = new User('', '');

  constructor(private userService: UserService) {}

  // constructor(private httpPippo: HttpClient) {
  //   //http adesso contiene tutti i metodi per fare chiamate ajax
  // }

  fetchUsersPippo() {
    //chiamata get. Andiamo a riempire l'array users.
    // this.httpPippo
    //   .get<{ data: User[] }>('https://reqres.in/api/users?page=2')
    //   .pipe(map((res) => res.data))
    this.isLoading = true;
    this.userService.getUsers().subscribe((res: User[]) => {
      this.isLoading = false;
      this.users = res;
    });
  }

  salvaUser() {
    this.userService.createUser(this.newUser).subscribe((res: any) => {
      let utenteCreato = new User(res.first_name, res.last_name);
      utenteCreato.id = res.id;
      this.users.push(utenteCreato);
    });
  }

  eliminaUser(id: number) {
    console.log('ok');

    this.userService.deleteUser(id).subscribe((res: any) => {
      this.users = this.users.filter((u) => u.id != id);
    });
  }
}
