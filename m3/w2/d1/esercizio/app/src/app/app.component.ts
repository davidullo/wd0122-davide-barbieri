import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Esercizio';

  users: any[] = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        for (let user of res) {
          this.users.push(user);
        }
      });
  }

  // elimina(n: number) {}
}
