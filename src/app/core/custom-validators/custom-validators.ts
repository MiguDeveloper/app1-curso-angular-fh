import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { delay, pipe, Observable, map, of, catchError } from 'rxjs';
import { EmailTakenService } from 'src/app/pages/reactive-forms/services/email-taken.service';

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const nameStrider: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const nameReserved = ['strider', 'tony', 'tonystark'];
  if (nameReserved.includes(control.value?.trim().toLowerCase())) {
    return { nameStrider: true };
  }
  return null;
};

export const emailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!emailPattern.test(control.value)) {
    return { emailInvalid: true };
  }
  return null;
};

export const emailEnabledFnAsync2: AsyncValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const emailTakenService = inject(EmailTakenService);
  return emailTakenService.getEmailTaken$(control.value).pipe(
    delay(3000),
    map((res: any) => {
      if (res?.id === 1) {
        return { emailEnabled: true };
      }
      return null;
    }),
    catchError(() => of({ emailEnabled: true }))
  );
};
export function emailEnabledFnAsync(
  emailValidationService: EmailTakenService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return emailValidationService.getEmailTaken$(control.value).pipe(
      map((isAvailable) => (isAvailable ? null : { emailTaken: true })),
      catchError(() => of(null))
    );
  };
}

export const crossPaswordMatchingValidator: ValidatorFn = (
  formGroupControl: AbstractControl<{ password: string; confirmPass: string }>
): ValidationErrors | null => {
  const password = formGroupControl.value.password;
  const confirmPass = formGroupControl.value.confirmPass;
  if (password === confirmPass) {
    return null;
  }
  return { passwordNotMatch: true };
};
