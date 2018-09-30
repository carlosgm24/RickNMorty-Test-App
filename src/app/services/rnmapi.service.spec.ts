import { TestBed } from '@angular/core/testing';

import { RnmapiService } from './rnmapi.service';

describe('RnmapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RnmapiService = TestBed.get(RnmapiService);
    expect(service).toBeTruthy();
  });
});
