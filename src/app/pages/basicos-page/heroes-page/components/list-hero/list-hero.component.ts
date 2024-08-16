import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-hero',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.scss',
})
export class ListHeroComponent {
  heroNames: string[] = [
    'ironman',
    'spiderman',
    'thor',
    'hulk',
    'captain america',
  ];
  currentHero: string = '';

  onPopHero(): void {
    if (this.heroNames.length === 0) {
      return;
    }
    this.currentHero = this.heroNames.pop() ?? '';
  }
}
