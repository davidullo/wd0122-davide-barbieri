import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  ngOnInit(): void {}

  data = {
    title: '',
    body: '',
  };

  addPost() {
    this.operations.createPost(this.data).subscribe({
      next: (res) => console.log(res),
    });
  }
}
