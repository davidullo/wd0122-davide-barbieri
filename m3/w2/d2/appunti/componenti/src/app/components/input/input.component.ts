import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nome: string = 'Marta';

  cambiaNome(event: any) {
    this.nome = event.target.value;
  }

  type: string = 'password';
  mostraNascondiPassword() {
    if (this.type == 'password') {
      var newType = 'text';
    } else {
      var newType = 'password';
    }
    this.type = newType;
  }

  cambiaEtichetta() {
    return this.type == 'password' ? 'Mostra Password' : 'Nascondi Password';
  }
}
