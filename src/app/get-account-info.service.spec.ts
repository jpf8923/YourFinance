import { TestBed } from '@angular/core/testing';

import { GetAccountInfoService } from './get-account-info.service';

describe('GetAccountInfoService', () => {
  let service: GetAccountInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccountInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
