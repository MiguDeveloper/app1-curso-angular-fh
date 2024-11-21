import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [MenuModule, CardModule],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Countries',
        items: [
          {
            label: 'Pais',
            icon: 'pi pi-flag',
            route: '/countries/pais',
          },
          {
            label: 'Capital',
            icon: 'pi pi-building',
            route: '/countries/capital',
          },
          {
            label: 'Region',
            icon: 'pi pi-globe',
            route: '/countries/region',
          },
        ],
      },
    ];
  }
}
