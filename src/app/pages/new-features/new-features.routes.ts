import { Routes } from '@angular/router';
import { NewFeaturesComponent } from './new-features.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';
import { DeferOptionsComponent } from './pages/defer-options/defer-options.component';
import { DeferViewsComponent } from './pages/defer-views/defer-views.component';
import { ViewTransitionComponent } from './pages/view-transition/view-transition.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewTransition2Component } from './pages/view-transition/view-transition2.component';

export default [
  {
    path: '',
    component: NewFeaturesComponent,
    children: [
      {
        path: 'change-detection',
        title: 'Change detection',
        component: ChangeDetectionComponent,
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        component: ControlFlowComponent,
      },
      {
        path: 'defer-options',
        title: 'Defer options',
        component: DeferOptionsComponent,
      },
      {
        path: 'defer-view',
        title: 'Defer view',
        component: DeferViewsComponent,
      },
      {
        path: 'user/:id',
        title: 'User view',
        component: UserComponent,
      },
      {
        path: 'user-list',
        title: 'User list',
        component: UsersComponent,
      },
      {
        path: 'view-transition',
        title: 'View transition',
        component: ViewTransitionComponent,
      },
      {
        path: 'view-transition-end',
        title: 'View transition end',
        component: ViewTransition2Component,
      },
      {
        path: '**',
        redirectTo: 'change-detection',
      },
    ],
  },
] as Routes;
