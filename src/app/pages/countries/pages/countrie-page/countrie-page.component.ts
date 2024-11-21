import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { DividerModule } from 'primeng/divider';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-countrie-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, DividerModule],
  templateUrl: './countrie-page.component.html',
  styleUrl: './countrie-page.component.scss',
})
export class CountriePageComponent implements OnInit {
  private _countriesService = inject(CountriesService);
  valueInput: string = '';
  countries: Country[] = [];

  ngOnInit(): void {
    this.valueInput = this._countriesService.cacheStore.byCountries.term;
    this.countries = this._countriesService.cacheStore.byCountries.countries;
  }

  search(value: string): void {
    if (!value) {
      return;
    }
    this._countriesService.searchCountry$(value).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
