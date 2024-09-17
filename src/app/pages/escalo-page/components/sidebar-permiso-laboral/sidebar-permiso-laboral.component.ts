import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'escalo-sidebar-permiso-laboral',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './sidebar-permiso-laboral.component.html',
  styleUrl: './sidebar-permiso-laboral.component.scss',
})
export class SidebarPermisoLaboralComponent implements OnInit {
  items: MenuItem[] | undefined;
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.items = [
      {
        label: 'Permiso Laboral',
        items: [
          {
            label: 'Ausencia por días',
            icon: 'pi pi-calendar',
            route: '/escalo/solicitud-permiso-laboral/usencia-por-dias',
          },
          {
            label: 'Ausencia por horas',
            icon: 'pi pi-clock',
            route: '/escalo/solicitud-permiso-laboral/usencia-por-horas',
          },
          {
            label: 'Presencia por dias/horas',
            icon: 'pi pi-building',
            route:
              '/escalo/solicitud-permiso-laboral/presencias-por-dias-horas',
          },
        ],
      },
    ];
  }
}
