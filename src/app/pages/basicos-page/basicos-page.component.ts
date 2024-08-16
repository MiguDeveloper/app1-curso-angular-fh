import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basicos-page',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './basicos-page.component.scss',
})
export class BasicosPageComponent {}
