import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../components/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent, ButtonModule],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss',
})
export class DeferOptionsComponent {}
