import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, MsgValidationFieldDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  frmAuthLogin = this._fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitForm() {
    if (this.frmAuthLogin.invalid) {
      this.frmAuthLogin.markAllAsTouched();
      return;
    }

    this._router.navigate(['/home']);
    console.log(this.frmAuthLogin.value);
  }

  get usuarioField(): FormControl {
    return this.frmAuthLogin.controls.usuario;
  }

  get isInvalidUsuario() {
    return this.usuarioField?.invalid && this.usuarioField?.touched;
  }

  get passwordField(): FormControl {
    return this.frmAuthLogin.controls.password;
  }

  get isInvalidPassword() {
    return this.passwordField?.invalid && this.passwordField?.touched;
  }
}
