import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormatDatePipe } from 'src/app/cores/pipes/format-date.pipe';
import { DialogModule } from 'primeng/dialog';
import confetti from 'canvas-confetti';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-presencias-por-dias-horas',
  standalone: true,
  imports: [
    DividerModule,
    ReactiveFormsModule,
    RadioButtonModule,
    MsgValidationFieldDirective,
    CommonModule,
    CalendarModule,
    FormatDatePipe,
    DialogModule,
    ToastModule,
  ],
  templateUrl: './presencias-por-dias-horas.component.html',
  styleUrl: './presencias-por-dias-horas.component.scss',
  providers: [MessageService],
})
export class PresenciasPorDiasHorasComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _messageService = inject(MessageService);
  motivosPresencia = [
    'Curso/capacitación',
    'Comisión de trabajo',
    'Reuniones externas',
    'Viajes de negocios',
    'Otros',
  ];
  frmPresenciaPorDiasHoras = this._fb.nonNullable.group({
    tipoPresencia: this._fb.group({
      tipo: ['', Validators.required],
      detalle: ['', []],
    }),
    fechaPresencia: [<Array<Date | null>>[], Validators.required],
    horaInicio: [null, Validators.required],
    horaFin: [null, Validators.required],
  });
  hasDescriptionOther = false;
  visible = false;

  ngOnInit(): void {
    this._changeTipoAusencia();
  }

  get tipoPresenciaField(): FormControl {
    return this.frmPresenciaPorDiasHoras.controls.tipoPresencia.controls.tipo;
  }

  get detalleTipoPresenciaField(): FormControl {
    return this.frmPresenciaPorDiasHoras.controls.tipoPresencia.controls
      .detalle;
  }

  get isInvalidTipoPresencia() {
    return this.tipoPresenciaField?.invalid && this.tipoPresenciaField?.touched;
  }

  get isInvalidDetallePresencia() {
    return (
      this.detalleTipoPresenciaField?.invalid &&
      this.detalleTipoPresenciaField?.touched
    );
  }

  get fechaPresenciaField(): FormControl {
    return this.frmPresenciaPorDiasHoras.controls.fechaPresencia;
  }

  get isInvalidFechaPresencia() {
    return (
      this.fechaPresenciaField?.invalid && this.fechaPresenciaField?.touched
    );
  }

  get horaInicioField(): FormControl {
    return this.frmPresenciaPorDiasHoras.controls.horaInicio;
  }

  get isInvalidHoraInicio() {
    return this.horaInicioField?.invalid && this.horaInicioField?.touched;
  }

  get horaFinField(): FormControl {
    return this.frmPresenciaPorDiasHoras.controls.horaFin;
  }

  get isInvalidHoraFin() {
    return this.horaFinField?.invalid && this.horaFinField?.touched;
  }

  submitForm() {
    if (this.frmPresenciaPorDiasHoras.invalid) {
      this.frmPresenciaPorDiasHoras.markAllAsTouched();
      return;
    }
    this.showDialog();
  }

  confirmarSolicitud() {
    this.celebrate();
    const { tipoPresencia, fechaPresencia, horaInicio, horaFin } =
      this.frmPresenciaPorDiasHoras.value;
    const times = [horaInicio, horaFin].map((time) => {
      const hours = new Date(time!).getHours();
      const minutes = new Date(time!).getMinutes();
      return `${hours}:${minutes}`;
    });

    const fechas = fechaPresencia!.map((fecha) =>
      fecha ? new Date(fecha).toISOString() : null
    );
    let newDates = [];
    if (fechas.includes(null)) {
      const [start] = fechas;
      newDates = [start, start];
    } else {
      newDates = [...fechas];
    }

    const request = {
      tipoPresencia,
      fechaPresencia: newDates,
      horaInicio: times[0],
      horaFin: times[1],
    };

    this._messageService.add({
      severity: 'success',
      summary: 'Registro de solicitud',
      detail: `Tu solicitud ha sido registrada con éxito`,
    });

    console.log('request', request);
    this.hideDialog();
    console.log('enviado correctamente');
    this.frmPresenciaPorDiasHoras.reset();
  }

  private _changeTipoAusencia() {
    this.tipoPresenciaField.valueChanges.subscribe((value: string) => {
      if ('otros' === value?.toLocaleLowerCase()) {
        this.hasDescriptionOther = true;
        this.detalleTipoPresenciaField.setValidators(Validators.required);
      } else {
        this.detalleTipoPresenciaField.setValue('');
        this.detalleTipoPresenciaField.clearValidators();
        this.hasDescriptionOther = false;
      }
      this.detalleTipoPresenciaField.updateValueAndValidity();
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

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }
}
