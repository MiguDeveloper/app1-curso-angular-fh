import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductPriceComponent } from './components/product-price/product-price.component';

@Component({
  selector: 'app-life-cycles',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ProductPriceComponent],
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.scss',
})
export class LifeCyclesComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  isProductVisible = false;
  currentPrice = 2;
  constructor() {
    console.log('constructor');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  toggleProductVisibility() {
    this.isProductVisible = !this.isProductVisible;
  }
  toggleIncreasePrice() {
    this.currentPrice += 10;
  }
}
