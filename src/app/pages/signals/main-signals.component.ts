import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-main-signals',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './main-signals.component.html',
  styleUrl: './main-signals.component.scss',
})
export class MainSignalsComponent {}
