import { Component, OnInit } from '@angular/core';
import { PhotoClass } from './photo-class';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos: PhotoClass[] = [];
  splicedPhotos: any = [];
  count = 0;
  constructor(private PhotoService: PhotoService) {}

  ngOnInit() {
    this.PhotoService.getPhoto().subscribe((photo) => {
      this.splicedPhotos = photo.splice(0, 10);
      console.log(this.splicedPhotos);
      this.photos.push(this.splicedPhotos);
    });
  }

  eliminaFoto(id: number) {
    this.PhotoService.deletePhoto(id).subscribe((res: any) => {
      this.photos = this.photos.filter((u) => u.id != id);
    });
  }

  contaLikes() {
    this.count++;
  }

  // contaLikes() {
  //   this.PhotoService.likesCounter();
  //   console.log(this.PhotoService.likesCounter());
  // }
}
