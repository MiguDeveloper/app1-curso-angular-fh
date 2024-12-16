import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country, Region } from '../interfaces/restContries.interface';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ChainingCountriesService {
  private _http = inject(HttpClient);
  private _apiCountry = environment.apiRestCountries;
  private readonly _regions: Region[] = Object.values(Region) as Region[];

  getRegions$(region: Region): Observable<Country[]> {
    return this._http.get<Country[]>(`${this._apiCountry}/region/${region}`);
  }
  get regions(): Region[] {
    return [...this._regions];
  }
}
