import { TestBed } from '@angular/core/testing';

import { ParserGpService } from './parser-gp.service';

describe('ParserGpService', () => {
  let service: ParserGpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParserGpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
