import { TestBed } from '@angular/core/testing';

import { SofttekApiService } from './softtek-api.service';

describe('SofttekApiService', () => {
  let service: SofttekApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SofttekApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
