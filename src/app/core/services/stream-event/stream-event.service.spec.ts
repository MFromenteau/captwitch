import { TestBed } from '@angular/core/testing';

import { StreamEventService } from './stream-event.service';

describe('StreamEventService', () => {
  let service: StreamEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
