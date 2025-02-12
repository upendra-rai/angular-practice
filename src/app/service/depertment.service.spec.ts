import { TestBed } from '@angular/core/testing';

import { DepertmentService } from './depertment.service';

describe('DepertmentService', () => {
  let service: DepertmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepertmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
