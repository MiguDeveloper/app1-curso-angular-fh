import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import {
  crossPaswordMatchingValidator,
  emailValidator,
  nameStrider,
} from '@core/custom-validators/custom-validators';
import { EmailValidatorTakenService } from '../../services/email-validator-taken.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MsgValidationFieldDirective,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _emailValidatorService = inject(EmailValidatorTakenService);
  formRegister = this._fb.group(
    {
      name: ['', [Validators.required, nameStrider]],
      email: [
        '',
        [Validators.required, emailValidator],
        [this._emailValidatorService],
      ],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required]],
    },
    {
      validators: crossPaswordMatchingValidator,
    }
  );

  submitForm() {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      console.log(this.formRegister.value);
    }
    console.log(this.formRegister.value);
  }
}
