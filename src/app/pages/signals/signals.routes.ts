import { Routes } from '@angular/router';
import { MainSignalsComponent } from './main-signals.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersSignalsPageComponent } from './pages/users-signals-page/users-signals-page.component';

export default [
  {
    path: '',
    component: MainSignalsComponent,
    children: [
      {
        path: 'counter',
        component: CounterPageComponent,
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },
      {
        path: 'tasks',
        component: TaskPageComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: 'users-signals',
        component: UsersSignalsPageComponent,
      },
      {
        path: '**',
        redirectTo: 'counter',
      },
    ],
  },
] as Routes;
