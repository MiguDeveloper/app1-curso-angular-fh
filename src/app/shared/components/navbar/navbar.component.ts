import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/', 'home'],
      },
      {
        label: 'RRHH',
        icon: 'pi pi-users',
        items: [
          [
            {
              label: 'Recursos Humanos',
              items: [
                {
                  label: 'Permiso Laboral',
                  routerLink: ['/', 'escalo', 'solicitud-permiso-laboral'],
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Basicos',
        visible: false,
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Basico 1',
              items: [
                { label: 'Contador', routerLink: ['/', 'basicos', 'contador'] },
                { label: 'Heroes', routerLink: ['/', 'basicos', 'heroes'] },
              ],
            },
          ],
          [
            {
              label: 'Basico 2',
              items: [
                { label: 'dbz', routerLink: ['/', 'basicos-2', 'dbz'] },
                { label: 'GifApp', routerLink: ['/', 'basicos-2', 'gif-app'] },
              ],
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }],
            },
          ],
          [
            {
              label: 'Bedroom',
              items: [
                { label: 'Bed' },
                { label: 'Chaise lounge' },
                { label: 'Cupboard' },
                { label: 'Dresser' },
                { label: 'Wardrobe' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
    ];
  }
}
