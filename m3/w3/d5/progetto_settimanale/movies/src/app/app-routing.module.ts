import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dettagli',
    loadChildren: () =>
      import('./dettagli/dettagli.module').then((m) => m.DettagliModule),
  },
  {
    path: 'preferiti',
    loadChildren: () =>
      import('./preferiti/preferiti.module').then((m) => m.PreferitiModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
