import { Routes } from '@angular/router';
import { Basicos2PagesComponent } from './basicos2-pages.component';
import { MainDbzPageComponent } from './pages/main-dbz-page/main-dbz-page.component';
import { MainGifAppPageComponent } from './pages/main-gif-app-page/main-gif-app-page.component';

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
        path: 'gif-app',
        component: MainGifAppPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dbz',
      },
    ],
  },
] as Routes;
