import { TestBed, inject } from '@angular/core/testing';

import { ManizalesDataMemoryService } from './manizales-data-memory.service';

describe('ManizalesDataMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManizalesDataMemoryService]
    });
  });

  it('should be created', inject([ManizalesDataMemoryService], (service: ManizalesDataMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
