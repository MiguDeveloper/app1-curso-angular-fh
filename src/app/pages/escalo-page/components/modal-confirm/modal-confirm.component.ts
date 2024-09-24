import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { ItemModal } from '../../models/item-modal.interface';
import { FormatDatePipe } from 'src/app/cores/pipes/format-date.pipe';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'rh-modal-confirm',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
    FormatDatePipe,
    DatePipe,
  ],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss',
  providers: [DatePipe, DialogService],
})
export class ModalConfirmComponent implements OnInit, OnDestroy {
  @Output() confirm = new EventEmitter<void>();
  private readonly _configModal = inject(DynamicDialogConfig);
  private readonly _ref = inject(DynamicDialogRef);
  messages: ItemModal[] = [];

  constructor() {}

  ngOnInit(): void {
    this.messages = this._configModal.data.messages;
  }

  ngOnDestroy(): void {
    if (this._ref) {
      this._ref.close();
    }
  }

  onConfirm(): void {
    this.confirm.emit();
    this._ref.close(true);
  }

  cancel(): void {
    this._ref.close(false);
  }
}
