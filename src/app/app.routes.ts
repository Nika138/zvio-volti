import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
