import { DividerModule } from 'primeng/divider';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormatDatePipe } from 'src/app/cores/pipes/format-date.pipe';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import confetti from 'canvas-confetti';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ausencia-por-horas',
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
  templateUrl: './ausencia-por-horas.component.html',
  styleUrl: './ausencia-por-horas.component.scss',
  providers: [MessageService],
})
export class AusenciaPorHorasComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _messageService = inject(MessageService);
  motivosAusencia = [
    'Compensación de HHEE',
    'Permiso atención médica',
    'Lactancia',
    'Permiso para tramites pers. (4hrs máx.)',
    'Permiso por cumpleaños (1/2 día)',
    'Otros',
  ];
  frmAusenciaPorHoras = this._fb.nonNullable.group({
    tipoAusencia: this._fb.group({
      tipo: ['', Validators.required],
      detalle: ['', []],
    }),
    fechaAusencia: ['', Validators.required],
    horaInicio: [null, Validators.required],
    horaFin: [null, Validators.required],
  });
  hasDescriptionOther = false;
  visible = false;

  ngOnInit(): void {
    this._changeTipoAusencia();
  }
  get tipoAusenciaField(): FormControl {
    return this.frmAusenciaPorHoras.controls.tipoAusencia.controls.tipo;
  }

  get detalleTipoAusenciaField(): FormControl {
    return this.frmAusenciaPorHoras.controls.tipoAusencia.controls.detalle;
  }

  get isInvalidTipoAusencia() {
    return this.tipoAusenciaField?.invalid && this.tipoAusenciaField?.touched;
  }

  get isInvalidDetalleAusencia() {
    return (
      this.detalleTipoAusenciaField?.invalid &&
      this.detalleTipoAusenciaField?.touched
    );
  }

  get fechaAusenciaField(): FormControl {
    return this.frmAusenciaPorHoras.controls.fechaAusencia;
  }

  get isInvalidFechaAusencia() {
    return this.fechaAusenciaField?.invalid && this.fechaAusenciaField?.touched;
  }

  get horaInicioField(): FormControl {
    return this.frmAusenciaPorHoras.controls.horaInicio;
  }

  get isInvalidHoraInicio() {
    return this.horaInicioField?.invalid && this.horaInicioField?.touched;
  }

  get horaFinField(): FormControl {
    return this.frmAusenciaPorHoras.controls.horaFin;
  }

  get isInvalidHoraFin() {
    return this.horaFinField?.invalid && this.horaFinField?.touched;
  }

  submitForm() {
    if (this.frmAusenciaPorHoras.invalid) {
      this.frmAusenciaPorHoras.markAllAsTouched();
      return;
    }

    this.showDialog();
  }

  confirmarSolicitud() {
    this.celebrate();
    const { tipoAusencia, fechaAusencia, horaInicio, horaFin } =
      this.frmAusenciaPorHoras.value;
    const times = [horaInicio, horaFin].map((time) => {
      const hours = new Date(time!).getHours();
      const minutes = new Date(time!).getMinutes();
      return `${hours}:${minutes}`;
    });
    const request = {
      tipoAusencia,
      fechaAusencia: new Date(fechaAusencia!).toISOString(),
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
    this.frmAusenciaPorHoras.reset();
    console.log(this.frmAusenciaPorHoras.value);
  }

  private _changeTipoAusencia() {
    this.tipoAusenciaField.valueChanges.subscribe((value: string) => {
      if ('otros' === value?.toLocaleLowerCase()) {
        this.hasDescriptionOther = true;
        this.detalleTipoAusenciaField.setValidators(Validators.required);
      } else {
        this.detalleTipoAusenciaField.setValue('');
        this.detalleTipoAusenciaField.clearValidators();
        this.hasDescriptionOther = false;
      }
      this.detalleTipoAusenciaField.updateValueAndValidity();
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
