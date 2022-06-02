import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Es1';

  isVisible = false;

  // users = [
  //   {
  //     id: 1,
  //     name: 'Davide Barbieri',
  //     username: 'deiv',
  //   },
  // ];

  // users è un array di oggetti "{}[]"
  users: { id: number; username: string; name: string }[] = [];

  // userFocus:{{ id: number; username: string; name: string }[] = [];}

  // ngOnInit contiene ciò che viene eseguito quando il component viene inizializzato (caricato). Somiglia un po a .windowOnLoad
  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        this.users = res;
      });
  }

  aggiungi() {
    let n: string | null = prompt('Inserire nome');
    let u: string | null = prompt('Inserire username');
    if (n && u) {
      this.users.push({
        username: u,
        name: n,
        id: this.users.length,
      });
    }
  }

  edit(id: number) {}

  elimina(id: number) {
    let newArray: { id: number; username: string; name: string }[] = [];
    this.users.forEach((e, i) => {
      if (e.id != id)
        // this.users = [...this.users.splice(0, i), ...this.users.splice(i + 1)];
        newArray.push(e);
    });
    this.users = newArray;
  }
}
