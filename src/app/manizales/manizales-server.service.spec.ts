import { TestBed, inject } from '@angular/core/testing';

import { ManizalesServerService } from './manizales-server.service';

describe('ManizalesServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManizalesServerService]
    });
  });

  it('should be created', inject([ManizalesServerService], (service: ManizalesServerService) => {
    expect(service).toBeTruthy();
  }));
});
