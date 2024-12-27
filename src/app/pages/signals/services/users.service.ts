import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {
  PaginateUser,
  SingleUserResponse,
  User,
} from '../interfaces/user.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);
  private urlApi = environment.apiReqRes;
  constructor() {}

  getUserById$(id: number): Observable<User> {
    return this._http
      .get<SingleUserResponse>(`${this.urlApi}/users/${id}`)
      .pipe(
        map((resp) => resp.data),
        tap((val) => console.log(val))
      );
  }

  getsUsers$(page: number): Observable<User[]> {
    return this._http
      .get<PaginateUser>(`${this.urlApi}/users`, { params: { page: page } })
      .pipe(
        map((resp) => resp.data),
        tap((val) => console.log(val))
      );
  }
}
