import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [
    {
      name: 'Marco',
      lastname: 'Rossi',
      gender: 'Maschio',
    },
    {
      name: 'Lucia',
      lastname: 'Bianchi',
      gender: 'Femmina',
    },
  ];

  name: string = '';
  lastname: string = '';

  aggiungiUomo() {
    let newUser: User = new User(this.name, this.lastname, 'Maschio');
    this.users.push(newUser);
    this.resetForm();
  }

  aggiungiDonna() {
    let newUser: User = new User(this.name, this.lastname, 'Femmina');
    this.users.push(newUser);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.lastname = '';
  }
}
