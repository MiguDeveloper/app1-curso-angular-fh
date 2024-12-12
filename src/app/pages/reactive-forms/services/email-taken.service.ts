import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailTakenService {
  private readonly _http = inject(HttpClient);
  private readonly _urlApi = environment.apiValidationEmail;
  getEmailTaken$(email: string): Observable<any> {
    return this._http.get(`${this._urlApi}?email=${email}`);
  }
}
