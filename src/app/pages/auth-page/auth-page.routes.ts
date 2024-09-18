import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './pages/login/login.component';

export default [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
] as Routes;
