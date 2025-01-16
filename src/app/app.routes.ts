import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@shared/layout/main-layout/main-layout.component';
import { isAuthenticatedGuard } from './pages/auth-page/guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    //canActivate: [isAuthenticatedGuard],
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
        path: 'countries',
        loadChildren: () => import('./pages/countries/countries-page.routes'),
      },
      {
        path: 'pipes',
        loadChildren: () => import('./pages/pipes-page/pipes-page.routes'),
      },
      {
        path: 'reactive-forms',
        loadChildren: () =>
          import('./pages/reactive-forms/reactive-forms.routes'),
      },
      {
        path: 'life-cycles',
        loadChildren: () => import('./pages/life-cycles/life-cycles.routes'),
      },
      {
        path: 'main-signals',
        loadChildren: () => import('./pages/signals/signals.routes'),
      },
      {
        path: 'new-features',
        loadChildren: () => import('./pages/new-features/new-features.routes'),
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
