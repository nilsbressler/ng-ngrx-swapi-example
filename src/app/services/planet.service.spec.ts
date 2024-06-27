import { TestBed } from '@angular/core/testing';

import { PlanetService } from './planet.service';

describe('AccessibilityCheckerService', () => {
  let service: PlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
