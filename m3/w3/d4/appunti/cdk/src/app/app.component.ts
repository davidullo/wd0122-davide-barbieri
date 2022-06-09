import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cdk';
  items = Array(500)
    .fill(1)
    .map((_, i) => `Item ${i}`);

  ngOnInit() {
    console.log(this.items);
  }
}
