import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CurrencyService],
  });
});

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
