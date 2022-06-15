import { Component, OnInit } from '@angular/core';
import { Blueprint } from '../model/blueprint.model';
import { OperationsService } from '../operations.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private operations: OperationsService,
    private spinner: NgxSpinnerService
  ) {}

  posts: Blueprint[] = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.spinner.show();
    this.operations.getAll().subscribe((res) => {
      this.posts = res;
      this.spinner.hide();
    });
  }
}
