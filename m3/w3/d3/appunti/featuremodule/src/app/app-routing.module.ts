import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportPageComponent } from './sports/sport-page.component';

const routes: Routes = [
  {
    path: 'sports',
    component: SportPageComponent,
    children: [
      {
        path: '',
      },
    ],
  },
  {
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
