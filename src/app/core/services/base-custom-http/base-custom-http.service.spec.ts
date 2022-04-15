import { TestBed } from '@angular/core/testing';

import { BaseCustomHttpService } from './base-custom-http.service';

describe('BaseCustomHttpService', () => {
  let service: BaseCustomHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCustomHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
