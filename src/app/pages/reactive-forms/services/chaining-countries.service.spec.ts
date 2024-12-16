import { TestBed } from '@angular/core/testing';

import { ChainingCountriesService } from './chaining-countries.service';

describe('ChainingCountriesService', () => {
  let service: ChainingCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChainingCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
