import { TestBed } from '@angular/core/testing';

import { DummyServiceService } from './dummy-service.service';

describe('DummyServiceService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({}),
    service = TestBed.get(DummyServiceService)
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
