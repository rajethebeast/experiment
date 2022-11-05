import { TestBed } from '@angular/core/testing';

import { VpolicyService } from './vpolicy.service';

describe('VpolicyService', () => {
  let service: VpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
