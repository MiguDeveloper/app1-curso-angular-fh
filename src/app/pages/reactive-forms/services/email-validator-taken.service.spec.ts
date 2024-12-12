import { TestBed } from '@angular/core/testing';

import { EmailValidatorTakenService } from './email-validator-taken.service';

describe('EmailValidatorTakenService', () => {
  let service: EmailValidatorTakenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidatorTakenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
