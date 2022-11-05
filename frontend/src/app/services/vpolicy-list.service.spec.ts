import { TestBed } from '@angular/core/testing';

import { VpolicyListService } from './vpolicy-list.service';

describe('VpolicyListService', () => {
  let service: VpolicyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpolicyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
