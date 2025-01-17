import { interval, Subject, take, takeUntil, tap } from 'rxjs';
import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
interface Product {
  id: number;
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    { id: 1, name: 'Product 1', quantity: 10 },
    { id: 2, name: 'Product 2', quantity: 10 },
  ]);
  private _destroyed$ = new Subject<void>();
  private _interval = interval(1000)
    .pipe(
      takeUntil(this._destroyed$),
      tap(() => {
        this.products.update((prods) => [
          ...prods,
          {
            id: prods.length + 1,
            name: `Product ${prods.length + 1}`,
            quantity: prods.length + 1,
          },
        ]);
        console.log('products', this.products());
      }),
      take(7)
    )
    .subscribe();

  updateProduct(product: Product, newQuantity: number) {
    this.products.update((prods) =>
      prods.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
