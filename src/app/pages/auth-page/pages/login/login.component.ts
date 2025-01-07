import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { emailValidator } from '@core/custom-validators/custom-validators';
import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    MsgValidationFieldDirective,
    RouterModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class LoginComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);
  private readonly _confirmService = inject(ConfirmationService);
  private readonly _msgService = inject(MessageService);
  frmAuthLogin = this._fb.nonNullable.group({
    usuario: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submitForm() {
    if (this.frmAuthLogin.invalid) {
      this.frmAuthLogin.markAllAsTouched();
      return;
    }

    const { usuario, password } = this.frmAuthLogin.getRawValue();
    this._authService.login$(usuario, password).subscribe(
      (resp) => {
        this._router.navigate(['/home']);
      },
      (error) => {
        this._confirmService.confirm({
          header: '¿Desea continuar?',
          message: error,
          accept: () => {
            this._msgService.add({
              severity: 'info',
              summary: 'Ok',
              detail: 'Ingrese nuevamente',
              life: 3000,
            });
          },
          reject: () => {
            this._msgService.add({
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Revise sus datos',
              life: 3000,
            });
          },
        });
      }
    );
    console.log(this.frmAuthLogin.value);
    // this._router.navigate(['/home']);
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
