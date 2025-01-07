import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginResponse,
  User,
} from '../interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _uriBase = environment.apiNestJs;
  private readonly _router = inject(Router);
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  currentUser = computed(() => this._currentUser());
  authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus$().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.Authenticated);
    localStorage.setItem('token', token);
    return true;
  }

  login$(email: string, password: string): Observable<boolean> {
    return this._http
      .post<LoginResponse>(`${this._uriBase}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError((err) => throwError(err.error.message))
      );
  }

  checkAuthStatus$(): Observable<boolean> {
    const url = `${this._uriBase}/auth/check-token`;
    const token = localStorage.getItem('token');
    if (!token) {
      this._authStatus.set(AuthStatus.NotAuthenticated);
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.NotAuthenticated);
        return of(false);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.NotAuthenticated);
    this._router.navigate(['/auth/login']);
  }
}
