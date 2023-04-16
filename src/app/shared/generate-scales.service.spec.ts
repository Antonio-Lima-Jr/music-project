import { TestBed } from '@angular/core/testing';

import { GenerateScalesService } from './generate-scales.service';

describe('GenerateScalesService', () => {
  let service: GenerateScalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateScalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
