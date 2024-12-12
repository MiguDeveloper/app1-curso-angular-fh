import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    ButtonModule,
    MsgValidationFieldDirective,
  ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
})
export class BasicPageComponent {
  private _fb = inject(FormBuilder);
  formBasic = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave() {
    if (this.formBasic.invalid) {
      this.formBasic.markAllAsTouched();
      return;
    }
    console.log(this.formBasic.value);
  }
}
