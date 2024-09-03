import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from '@shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gift-card-list',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, LazyImageComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() gif!: Gif;
}
