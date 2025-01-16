import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  templateUrl: './heavy-loaders-slow.component.html',
  styleUrl: './heavy-loaders-slow.component.scss',
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) bgColor: string = '';
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('HeavyLoadersSlowComponent - constructor');
  }
}
