import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  items = signal<MenuItem[]>([
    {
      label: 'Change Detection',
      icon: 'pi pi-angle-right',
      route: 'change-detection',
    },
    {
      label: 'Control Flow',
      icon: 'pi pi-angle-right',
      route: 'control-flow',
    },
    {
      label: 'Defer Options',
      icon: 'pi pi-angle-right',
      route: 'defer-options',
    },
    {
      label: 'Defer view',
      icon: 'pi pi-angle-right',
      route: 'defer-view',
    },
    {
      label: 'User list',
      icon: 'pi pi-angle-right',
      route: 'user-list',
    },
    {
      label: 'View transition',
      icon: 'pi pi-angle-right',
      route: 'view-transition',
    },
    {
      label: 'View transition end',
      icon: 'pi pi-angle-right',
      route: 'view-transition-end',
    },
    {
      label: 'Input output',
      icon: 'pi pi-angle-right',
      route: 'input-output',
    },
  ]);
}
