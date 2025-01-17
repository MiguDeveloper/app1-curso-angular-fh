import {
  Component,
  effect,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
interface Product {
  id: number;
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  // @Input({ required: true }) product!: Product;
  product = input.required<Product>();
  // @Output() onIncrementQuantity = new EventEmitter<number>();
  onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => console.log(this.product().name));
}
