import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blueprint } from '../model/blueprint.model';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
})
export class DetailsPostComponent implements OnInit {
  constructor(
    private operations: OperationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  data = {
    title: '',
    body: '',
    id: '',
  };

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = +p['id'];
      this.getPost(id);
    });

    // console.log(this.route.snapshot.data['id']);
    // this.getPost(this.route.snapshot.data['id']);
    // console.log(this.data);
  }

  getPost(id: number) {
    this.operations.getPost(id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
    });
  }

  detailsPost() {
    const newPost = {
      id: this.data.id,
      title: this.data.title,
      body: this.data.body,
    };
    this.operations.updatePost(newPost.id, newPost).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
