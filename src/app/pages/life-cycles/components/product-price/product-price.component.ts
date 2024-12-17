import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Input,
} from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-price',
  standalone: true,
  imports: [],
  templateUrl: './product-price.component.html',
  styleUrl: './product-price.component.scss',
})
export class ProductPriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price = 0;
  private _destroyed$ = new Subject<void>();

  constructor() {
    console.log('priceComponent constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('priceComponent: ngOnChanges');
    console.log({ changes });
  }
  ngOnInit(): void {
    console.log('priceComponent: ngOnInit');
    interval(1000)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((value) => console.log(`priceComponent: ${value}`));
  }
  ngOnDestroy(): void {
    console.log('priceComponent: ngOnDestroy');
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
