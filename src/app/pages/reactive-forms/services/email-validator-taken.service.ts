import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { environment } from '@env/environment';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorTakenService implements AsyncValidator {
  private readonly _http = inject(HttpClient);
  private readonly _urlApi = environment.apiValidationEmail;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._http.get(`${this._urlApi}?email=${control.value}`).pipe(
      map((res: any) => {
        if (res?.id === 2) {
          return { emailDisabled: true };
        }
        return null;
      }),
      delay(4000),
      catchError(() => of(null))
    );
  }
}
