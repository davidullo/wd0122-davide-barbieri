import { Component, OnInit } from '@angular/core';
// import { TodoArray } from './todos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.notCompleted = [];
  }

  newTodo: string = '';
  Todos: string[] = ['Dare da mangiare alla tartaruga 🐢', 'Fare la spesa'];
  // notCompleted!: TodoArray[];

  addTodo() {
    if (this.newTodo == '') {
      alert('Non hai scritto nulla!');
    } else {
      this.Todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  //serve per cancellare i todos, non sono riuscito a spostarli nella pagina "Completed"
  completeTodo(i: any) {
    this.Todos.splice(i, 1);
  }
}
