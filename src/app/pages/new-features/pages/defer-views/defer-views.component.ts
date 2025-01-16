import { TitleComponent } from '../../components/title/title.component';
import { HeavyLoadersSlowComponent } from './../../components/heavy-loaders-slow/heavy-loaders-slow.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.scss',
})
export class DeferViewsComponent {}
