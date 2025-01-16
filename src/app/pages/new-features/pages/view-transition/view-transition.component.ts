import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './view-transition.component.html',
  styleUrl: './view-transition.component.scss',
})
export class ViewTransitionComponent {}
