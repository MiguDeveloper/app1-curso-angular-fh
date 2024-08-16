import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basicos2-pages',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  styleUrl: './basicos2-pages.component.scss',
})
export class Basicos2PagesComponent {}
