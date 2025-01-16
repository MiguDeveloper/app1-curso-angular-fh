import { Component } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-features',
  standalone: true,
  imports: [SideNavComponent, RouterOutlet],
  templateUrl: './new-features.component.html',
  styleUrl: './new-features.component.scss',
})
export class NewFeaturesComponent {}
