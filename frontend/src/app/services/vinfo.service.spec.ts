import { TestBed } from '@angular/core/testing';

import { VinfoService } from './vinfo.service';

describe('VinfoService', () => {
  let service: VinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
