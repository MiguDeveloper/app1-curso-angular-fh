import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { isNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';

export default [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        canActivate: [isNotAuthenticatedGuard],
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
] as Routes;
