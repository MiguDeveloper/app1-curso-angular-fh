import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { ChainingControlsPageComponent } from './pages/chaining-controls-page/chaining-controls-page.component';

export default [
  {
    path: '',
    component: ReactiveFormsComponent,
    children: [
      {
        path: 'basic-forms',
        component: BasicPageComponent,
      },
      {
        path: 'dynamic-forms',
        component: DynamicPageComponent,
      },
      {
        path: 'switches',
        component: SwitchesPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'chaining-controls',
        component: ChainingControlsPageComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'basic-forms',
      },
    ],
  },
] as Routes;
