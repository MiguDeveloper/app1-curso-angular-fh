import { Routes } from '@angular/router';
import { PipesPageComponent } from './pipes-page.component';
import { PipeAngularPageComponent } from './pages/pipe-angular-page/pipe-angular-page.component';
import { PipePersonalizadosPageComponent } from './pages/pipe-personalizados-page/pipe-personalizados-page.component';

export default [
  {
    path: '',
    component: PipesPageComponent,
    children: [
      { path: 'pipes-angular', component: PipeAngularPageComponent },
      {
        path: 'pipes-personalizados',
        component: PipePersonalizadosPageComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'pipes-angular' },
    ],
  },
] as Routes;
