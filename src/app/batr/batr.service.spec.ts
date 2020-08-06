import { TestBed } from '@angular/core/testing';

import { BatrService } from './batr.service';

describe('BatrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatrService = TestBed.get(BatrService);
    expect(service).toBeTruthy();
  });
});
