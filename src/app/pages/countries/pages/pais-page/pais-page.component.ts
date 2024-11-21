import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-pais-page',
  standalone: true,
  imports: [TagModule],
  templateUrl: './pais-page.component.html',
  styleUrl: './pais-page.component.scss',
})
export class PaisPageComponent implements OnInit {
  private _activatedRouter = inject(ActivatedRoute);
  private _countriesService = inject(CountriesService);
  private _router = inject(Router);
  country?: Country;

  ngOnInit(): void {
    this._activatedRouter.params
      .pipe(
        switchMap(({ id }) => this._countriesService.searchByAlphaCode$(id))
      )
      .subscribe((country) => {
        console.log(country);
        if (!country) {
          this._router.navigateByUrl('countries/pais');
        } else {
          this.country = country;
        }
      });
  }
}
