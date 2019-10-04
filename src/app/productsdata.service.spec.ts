import { TestBed } from '@angular/core/testing';

import { ProductsdataService } from './productsdata.service';

describe('ProductsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsdataService = TestBed.get(ProductsdataService);
    expect(service).toBeTruthy();
  });
});
