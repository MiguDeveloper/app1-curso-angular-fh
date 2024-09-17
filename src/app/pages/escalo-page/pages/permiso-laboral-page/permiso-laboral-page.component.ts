import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarPermisoLaboralComponent } from '../../components/sidebar-permiso-laboral/sidebar-permiso-laboral.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-permiso-laboral-page',
  standalone: true,
  imports: [
    SidebarPermisoLaboralComponent,
    RouterOutlet,
    PanelModule,
    CardModule,
  ],
  templateUrl: './permiso-laboral-page.component.html',
  styleUrl: './permiso-laboral-page.component.scss',
})
export class PermisoLaboralPageComponent {}
