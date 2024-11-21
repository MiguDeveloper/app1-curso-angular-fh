import { Component, inject, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { DividerModule } from 'primeng/divider';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    DividerModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: './capital-page.component.html',
  styleUrl: './capital-page.component.scss',
})
export class CapitalPageComponent implements OnInit {
  private _countriesService = inject(CountriesService);
  countries: Country[] = [];
  valueInput: string = '';
  isLoading = false;

  ngOnInit(): void {
    this.valueInput = this._countriesService.cacheStore.byCapital.term;
    this.countries = this._countriesService.cacheStore.byCapital.countries;
  }

  search(value: string): void {
    if (!value) {
      return;
    }
    this.isLoading = true;
    this._countriesService.searchCapital$(value).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
