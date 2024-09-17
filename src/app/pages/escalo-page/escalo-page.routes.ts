import { Routes } from '@angular/router';
import { EscaloPageComponent } from './escalo-page.component';
import { PermisoLaboralPageComponent } from './pages/permiso-laboral-page/permiso-laboral-page.component';
import { AusenciaPorDiasComponent } from './pages/ausencia-por-dias/ausencia-por-dias.component';
import { AusenciaPorHorasComponent } from './pages/ausencia-por-horas/ausencia-por-horas.component';
import { PresenciasPorDiasHorasComponent } from './pages/presencias-por-dias-horas/presencias-por-dias-horas.component';

export default [
  {
    path: '',
    component: EscaloPageComponent,
    children: [
      {
        path: 'solicitud-permiso-laboral',
        component: PermisoLaboralPageComponent,
        children: [
          {
            path: 'usencia-por-dias',
            component: AusenciaPorDiasComponent,
          },
          {
            path: 'usencia-por-horas',
            component: AusenciaPorHorasComponent,
          },
          {
            path: 'presencias-por-dias-horas',
            component: PresenciasPorDiasHorasComponent,
          },
          {
            path: '**',
            redirectTo: 'usencia-por-dias',
          },
        ],
      },
    ],
  },
] as Routes;
