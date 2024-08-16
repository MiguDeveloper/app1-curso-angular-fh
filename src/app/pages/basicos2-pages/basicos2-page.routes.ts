import { Routes } from '@angular/router';
import { Basicos2PagesComponent } from './basicos2-pages.component';
import { MainDbzPageComponent } from './pages/main-dbz-page/main-dbz-page.component';

export default [
  {
    path: '',
    component: Basicos2PagesComponent,
    children: [
      {
        path: 'dbz',
        component: MainDbzPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dbz',
      },
    ],
  },
] as Routes;
