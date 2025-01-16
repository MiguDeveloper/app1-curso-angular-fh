import { computed, inject, Injectable, signal } from '@angular/core';
import {
  UserNewFeatures,
  UserResponse,
  UserSingle,
} from '../interfaces/users.interfaces';
import { environment } from '@env/environment';
import { delay, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
interface State {
  users: UserNewFeatures[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _httClient = inject(HttpClient);
  private _urlBase = environment.apiReqRes;
  #state = signal<State>({
    loading: true,
    users: [],
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log('cargando data users');
  }

  getUsers$(): Observable<UserResponse> {
    return this._httClient.get<UserResponse>(`${this._urlBase}/users`).pipe(
      delay(2000),
      tap((response) => {
        console.log(response);
        this.#state.set({
          users: response.data,
          loading: false,
        });
      })
    );
  }
  getUsersById$(id: string): Observable<UserNewFeatures> {
    return this._httClient.get<UserSingle>(`${this._urlBase}/users/${id}`).pipe(
      delay(2000),
      map((value) => value.data)
    );
  }
}
