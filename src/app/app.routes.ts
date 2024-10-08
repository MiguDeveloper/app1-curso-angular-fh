import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home-page/home-pages.routes'),
      },
      {
        path: 'escalo',
        loadChildren: () => import('./pages/escalo-page/escalo-page.routes'),
      },
      {
        path: 'basicos',
        loadChildren: () => import('./pages/basicos-page/basicos-page.routes'),
      },
      {
        path: 'basicos-2',
        loadChildren: () =>
          import('./pages/basicos2-pages/basicos2-page.routes'),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
    ],
  },
  {
    path: 'auth',
    title: 'Autenticación',
    loadChildren: () => import('./pages/auth-page/auth-page.routes'),
  },
];
