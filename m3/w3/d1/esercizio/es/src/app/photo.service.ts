import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  count = 0;

  getPhoto() {
    return this.http.get<object[]>(this.apiUrl);
  }

  deletePhoto(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  // likesCounter() {
  //   return this.count++;
  // }
}
