import { Routes } from '@angular/router';
import { CountriesPageComponent } from './countries-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { CountriePageComponent } from './pages/countrie-page/countrie-page.component';

export default [
  {
    path: '',
    component: CountriesPageComponent,
    children: [
      {
        path: 'pais',
        title: 'Country search',
        component: CountriePageComponent,
      },
      {
        path: 'capital',
        title: 'Capital search',
        component: CapitalPageComponent,
      },
      {
        path: 'region',
        title: 'Region search',
        component: RegionPageComponent,
      },
      {
        path: 'by/:id',
        component: PaisPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pais',
      },
    ],
  },
] as Routes;
