import { TestBed } from '@angular/core/testing';

import { StreamRequestService } from './stream-request.service';

describe('StreamRequestService', () => {
  let service: StreamRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
