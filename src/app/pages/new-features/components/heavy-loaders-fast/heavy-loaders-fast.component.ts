import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [],
  templateUrl: './heavy-loaders-fast.component.html',
  styleUrl: './heavy-loaders-fast.component.scss',
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) bgColor: string = '';
  constructor() {
    console.log('HeavyLoadersFastComponent - constructor');
  }
}
