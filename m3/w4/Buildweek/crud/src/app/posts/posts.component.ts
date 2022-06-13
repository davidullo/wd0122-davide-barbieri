import { Component, OnInit } from '@angular/core';
import { Blueprint } from '../model/blueprint.model';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  posts: Blueprint[] = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.operations.getAll().subscribe((res) => {
      this.posts = res;
    });
  }
}
