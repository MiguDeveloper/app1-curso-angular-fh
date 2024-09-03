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
        label: 'Escalo',
        icon: 'pi pi-home',
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
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
                { label: 'Storage' },
              ],
            },
          ],
          [
            {
              label: 'Home Theather',
              items: [
                { label: 'Projector' },
                { label: 'Speakers' },
                { label: 'TVs' },
              ],
            },
          ],
          [
            {
              label: 'Gaming',
              items: [
                { label: 'Accessories' },
                { label: 'Console' },
                { label: 'PC' },
                { label: 'Video Games' },
              ],
            },
          ],
          [
            {
              label: 'Appliances',
              items: [
                { label: 'Coffee Machine' },
                { label: 'Fridge' },
                { label: 'Oven' },
                { label: 'Vaccum Cleaner' },
                { label: 'Washing Machine' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
          [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },
          ],
          [
            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },
          ],
          [
            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },
          ],
          [
            {
              label: 'Tennis',
              items: [
                { label: 'Balls' },
                { label: 'Rackets' },
                { label: 'Shoes' },
                { label: 'Training' },
              ],
            },
          ],
        ],
      },
    ];
  }
}
