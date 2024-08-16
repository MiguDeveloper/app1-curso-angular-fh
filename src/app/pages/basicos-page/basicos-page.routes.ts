import { Routes } from '@angular/router';
import { BasicosPageComponent } from './basicos-page.component';
import { ContadorPageComponent } from './contador-page/contador-page.component';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';

export default [
  {
    path: '',
    component: BasicosPageComponent,
    children: [
      {
        path: 'contador',
        component: ContadorPageComponent,
      },
      {
        path: 'heroes',
        component: HeroesPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contador',
      },
    ],
  },
] as Routes;
