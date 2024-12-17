import { Routes } from '@angular/router';
import { LifeCyclesComponent } from './life-cycles.component';
import { BasicComponent } from './pages/basic/basic.component';

export default [
  {
    path: '',
    component: LifeCyclesComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'basic',
      },
    ],
  },
] as Routes;
