import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'countrie-search-box',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'Search...';
  @Input() valueInput: string = '';
  @Output() onSearch = new EventEmitter<string>();
  termSearchForm: FormControl = new FormControl(this.valueInput);

  private _debouncer = new Subject<string>();
  private _destroyed$ = new Subject<void>();

  ngOnInit(): void {
    this.termSearchForm.setValue(this.valueInput);
    this.termSearchForm.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .subscribe((value) => this._debouncer.next(value));
    this._debouncer
      .pipe(debounceTime(1000), takeUntil(this._destroyed$))
      .subscribe((value) => this.onSearch.emit(value));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
