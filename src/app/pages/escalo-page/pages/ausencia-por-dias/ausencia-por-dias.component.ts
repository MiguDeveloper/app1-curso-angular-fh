import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { DialogModule } from 'primeng/dialog';
import { FormatDatePipe } from 'src/app/cores/pipes/format-date.pipe';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import confetti from 'canvas-confetti';
import { ItemModal } from '../../models/item-modal.interface';
import { ModalConfirmComponent } from '../../components/modal-confirm/modal-confirm.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MOTIVOS_AUSENCIA } from '../../data/constantes';
@Component({
  selector: 'app-ausencia-por-dias',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    CommonModule,
    DialogModule,
    MsgValidationFieldDirective,
    FormatDatePipe,
    DividerModule,
    ToastModule,
    ModalConfirmComponent,
  ],
  templateUrl: './ausencia-por-dias.component.html',
  styleUrl: './ausencia-por-dias.component.scss',
  providers: [MessageService, DialogService],
})
export class AusenciaPorDiasComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _messageService = inject(MessageService);
  ref: DynamicDialogRef | undefined;
  motivosAusencia = MOTIVOS_AUSENCIA;
  frmAusenciaPorDias = this._fb.nonNullable.group({
    tipoAusencia: ['', Validators.required],
    rangoAusencia: [<Array<Date | null>>[], Validators.required],
  });

  constructor(public dialogService: DialogService) {}
  ngOnInit(): void {}

  get tipoAusenciaField(): FormControl<string> {
    return this.frmAusenciaPorDias.controls.tipoAusencia;
  }

  get rangoAusenciaField(): FormControl<Array<Date | null>> {
    return this.frmAusenciaPorDias.controls.rangoAusencia;
  }

  get isInvalidTipoAusencia() {
    return this.tipoAusenciaField?.invalid && this.tipoAusenciaField?.touched;
  }

  get isInvalidRandoFechas() {
    return this.rangoAusenciaField?.invalid && this.rangoAusenciaField?.touched;
  }

  onSubmit() {
    if (this.frmAusenciaPorDias.invalid) {
      this.frmAusenciaPorDias.markAllAsTouched();
      return;
    }

    const itemsMessage: ItemModal[] = [
      {
        icon: 'pi pi-check-circle',
        label: 'Motivo',
        value: this.tipoAusenciaField.value,
      },
      {
        icon: 'pi pi-calendar',
        label: 'Fechas',
        pipe: 'mchFormatDate',
        value: this.rangoAusenciaField.value,
      },
    ];

    this.ref = this.dialogService.open(ModalConfirmComponent, {
      header: 'Confirmación de solicitud',
      data: { messages: itemsMessage },
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.confirmarSolicitud();
      }
    });
  }

  confirmarSolicitud() {
    const { tipoAusencia, rangoAusencia } = this.frmAusenciaPorDias.value;
    const rangos = rangoAusencia!.map((fecha) =>
      fecha ? new Date(fecha).toISOString() : null
    );
    let newDates = [];
    if (rangos.includes(null)) {
      const [start] = rangos;
      newDates = [start, start];
    } else {
      newDates = [...rangos];
    }

    const request = {
      tipoAusencia,
      rangoAusencia: newDates,
    };

    const tipoSolicitud = this.frmAusenciaPorDias.controls.tipoAusencia.value;

    if (tipoSolicitud === 'Vacaciones') {
      this.celebrate();
    }

    this.frmAusenciaPorDias.reset();

    this._messageService.add({
      severity: 'success',
      summary: 'Registro de solicitud',
      detail: 'Tu solicitud ha sido registrada con éxito',
    });
  }

  celebrate() {
    const duration = 6000;
    const colors = ['#bb0000', '#ffffff'];
    confetti({
      particleCount: 300,
      spread: 160,
      origin: { y: 0.6 },
      colors,
    });

    setTimeout(() => confetti.reset(), duration);
  }
}
