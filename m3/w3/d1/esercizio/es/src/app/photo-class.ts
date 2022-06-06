import { Photos } from './photos';
export class PhotoClass implements Photos {
  albumId!: number;
  id!: number;
  title!: string;
  url!: string;
  thumbnailUrl!: string;

  constructor(title: string, thumbnailUrl: string) {
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
  }
}
