import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contador-page',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './contador-page.component.html',
  styleUrl: './contador-page.component.scss',
})
export class ContadorPageComponent {
  title: string = 'Contador App';
  counter: number = 10;

  onIncrease(num: number): void {
    this.counter += num;
  }

  onResetCounter(): void {
    this.counter = 10;
  }
}
