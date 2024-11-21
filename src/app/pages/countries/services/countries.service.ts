import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _url = 'https://restcountries.com/v3.1';
  private _http = inject(HttpClient);
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor() {
    this._getCacheStore();
  }

  private _requestCountriesRequest$(url: string): Observable<Country[]> {
    return this._http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  private _saveCacheStore() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private _getCacheStore() {
    const cacheStore = localStorage.getItem('cacheStore');
    if (cacheStore) {
      this.cacheStore = JSON.parse(cacheStore);
    }
  }

  searchByAlphaCode$(code: string): Observable<Country | null> {
    return this._http.get<Country[]>(`${this._url}/alpha/${code}`).pipe(
      map((contries) => (contries.length > 0 ? contries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchCapital$(capital: string): Observable<Country[]> {
    const url = `${this._url}/capital/${capital}`;
    return this._requestCountriesRequest$(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: capital, countries })
      ),
      tap(() => this._saveCacheStore())
    );
  }

  searchCountry$(country: string): Observable<Country[]> {
    const url = `${this._url}/name/${country}`;
    return this._requestCountriesRequest$(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { term: country, countries })
      ),
      tap(() => this._saveCacheStore())
    );
  }

  searchRegion$(region: Region): Observable<Country[]> {
    const url = `${this._url}/region/${region}`;
    return this._requestCountriesRequest$(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this._saveCacheStore())
    );
  }
}
