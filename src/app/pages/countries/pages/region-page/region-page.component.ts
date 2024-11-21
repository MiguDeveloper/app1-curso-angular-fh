import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Region } from '../../interfaces/region.type';

interface RegionOption {
  name: string;
  value: Region;
}
@Component({
  selector: 'app-region-page',
  standalone: true,
  imports: [
    CountryTableComponent,
    DividerModule,
    SelectButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './region-page.component.html',
  styleUrl: './region-page.component.scss',
})
export class RegionPageComponent implements OnInit, OnDestroy {
  private _countriesService = inject(CountriesService);
  private _destroyed$ = new Subject<void>();
  region: FormControl = new FormControl();
  countries: Country[] = [];
  regions: RegionOption[] = [
    { name: 'Africa', value: 'Africa' },
    { name: 'Americas', value: 'Americas' },
    { name: 'Asia', value: 'Asia' },
    { name: 'Europe', value: 'Europe' },
    { name: 'Oceania', value: 'Oceania' },
  ];

  ngOnInit(): void {
    this.region.setValue(this._countriesService.cacheStore.byRegion.region);
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.region.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .subscribe((region) => {
        this.search(region);
      });
  }

  search(value: Region): void {
    if (!value) {
      return;
    }
    this._countriesService.searchRegion$(value).subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
