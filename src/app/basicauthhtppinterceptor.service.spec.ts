import { TestBed } from '@angular/core/testing';

import { BasicauthhtppinterceptorService } from './basicauthhtppinterceptor.service';

describe('BasicauthhtppinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicauthhtppinterceptorService = TestBed.get(BasicauthhtppinterceptorService);
    expect(service).toBeTruthy();
  });
});
