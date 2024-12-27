import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  counter = signal<number>(10);
  squareCounter = computed(() => this.counter() ** 2);
  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
