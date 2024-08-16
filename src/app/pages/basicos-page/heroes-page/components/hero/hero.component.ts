import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 45;

  onChangeName(): void {
    this.name = 'spiderman';
  }

  onChangeAge(): void {
    this.age = 30;
  }

  onReset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
