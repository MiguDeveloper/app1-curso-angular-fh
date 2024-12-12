import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-switches-page',
  standalone: true,
  imports: [
    JsonPipe,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    CheckboxModule,
    MsgValidationFieldDirective,
    ButtonModule,
  ],
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.scss',
})
export class SwitchesPageComponent {
  private readonly _fb = inject(FormBuilder);
  stateOptions: any[] = [
    { label: 'Si', value: true },
    { label: 'No', value: false },
  ];
  formSwitches = this._fb.group({
    genero: ['', Validators.required],
    notificaciones: [false, []],
    terminos: [false, [Validators.requiredTrue]],
  });

  submitForm() {
    if (this.formSwitches.invalid) {
      this.formSwitches.markAllAsTouched();
      console.log(this.formSwitches.value);
    }
  }
}
