import { TestBed } from '@angular/core/testing';

import { BookTestRideService } from './book-test-ride.service';

describe('BookTestRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookTestRideService = TestBed.get(BookTestRideService);
    expect(service).toBeTruthy();
  });
});
