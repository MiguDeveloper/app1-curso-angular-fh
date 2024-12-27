import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
interface MenuItemSignal {
  title: string;
  route: string;
}
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  items = signal<MenuItem[]>([
    {
      label: 'Counter',
      icon: 'pi pi-angle-right',
      route: 'counter',
    },
    {
      label: 'User Info',
      icon: 'pi pi-angle-right',
      route: 'user-info',
    },
    {
      label: 'Mutaciones',
      icon: 'pi pi-angle-right',
      route: 'properties',
    },
    {
      label: 'Tasks',
      icon: 'pi pi-angle-right',
      route: 'tasks',
    },
    {
      label: 'Users sin signals',
      icon: 'pi pi-angle-right',
      route: 'users',
    },
    {
      label: 'Users signals',
      icon: 'pi pi-angle-right',
      route: 'users-signals',
    },
  ]);
}
