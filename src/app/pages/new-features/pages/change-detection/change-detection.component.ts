import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
})
export class ChangeDetectionComponent {
  public fmAsProperty = {
    name: 'Angular property',
    releaseDate: 2016,
  };
  public fmAsSignal = signal({
    name: 'Angular signal',
    releaseDate: 2016,
  });
  public currentFramework = computed(
    () => `Change detection - ${this.fmAsSignal().name}`
  );

  constructor() {
    setTimeout(() => {
      //this.fmAsProperty.name = 'React';
      this.fmAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('ChangeDetectionComponent - property');
    }, 3000);
  }
}
