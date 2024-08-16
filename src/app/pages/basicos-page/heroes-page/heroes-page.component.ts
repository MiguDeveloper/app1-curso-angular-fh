import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ListHeroComponent } from './components/list-hero/list-hero.component';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [HeroComponent, ListHeroComponent],
  templateUrl: './heroes-page.component.html',
  styleUrl: './heroes-page.component.scss',
})
export class HeroesPageComponent {}
