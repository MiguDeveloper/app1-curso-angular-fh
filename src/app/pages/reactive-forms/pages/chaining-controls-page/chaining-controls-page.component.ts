import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ChainingCountriesService } from '../../services/chaining-countries.service';
import { map, switchMap, tap } from 'rxjs';
import { Country, Region } from '../../interfaces/restContries.interface';

interface ArrItems {
  name: string;
}

@Component({
  selector: 'app-chaining-controls-page',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './chaining-controls-page.component.html',
  styleUrls: ['./chaining-controls-page.component.scss'],
})
export class ChainingControlsPageComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _chainingService = inject(ChainingCountriesService);

  formChaining = this._fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: [''],
  });

  regions: ArrItems[] = this._chainingService.regions.map((item) => ({
    name: item,
  }));
  countries: ArrItems[] = [];
  borders: ArrItems[] = [];

  ngOnInit(): void {
    this.handleRegionChanges();
    this.handleCountryChanges();
  }

  private handleRegionChanges(): void {
    this.formChaining.controls.region.valueChanges
      .pipe(
        tap(() => this.resetCountryAndBorders()),
        tap((value) => console.log(value)),
        switchMap((region: any) =>
          this._chainingService.getRegions$(region.name as Region)
        )
      )
      .subscribe((countries: Country[]) => {
        this.countries = countries.map((country) => ({
          name: country.name.common,
          borders: country.borders ?? [],
        }));
      });
  }

  private handleCountryChanges(): void {
    this.formChaining.controls.country.valueChanges
      .pipe(tap(() => this.resetBorders()))
      .subscribe((country: any) => {
        if (country?.borders) {
          this.borders = country.borders.map((border: string) => ({
            name: border,
          }));
          this.formChaining.controls.border.setValidators(Validators.required);
        } else {
          this.formChaining.controls.border.clearValidators();
        }
        this.formChaining.controls.border.updateValueAndValidity();
      });
  }

  private resetCountryAndBorders(): void {
    this.formChaining.controls.country.setValue('');
    this.formChaining.controls.border.setValue('');
    this.borders = [];
  }

  private resetBorders(): void {
    this.formChaining.controls.border.setValue('');
    this.borders = [];
  }
}
