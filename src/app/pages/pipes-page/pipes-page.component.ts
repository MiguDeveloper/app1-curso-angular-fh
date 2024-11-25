import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-pipes-page',
  standalone: true,
  imports: [MenuModule, CardModule],
  templateUrl: './pipes-page.component.html',
  styleUrl: './pipes-page.component.scss',
})
export class PipesPageComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes',
        items: [
          {
            label: 'Pipes Angular',
            icon: 'pi pi-palette',
            route: '/pipes/pipes-angular',
          },
          {
            label: 'Pipes Personalizados',
            icon: 'pi pi-palette',
            route: '/pipes/pipes-personalizados',
          },
        ],
      },
    ];
  }
}
