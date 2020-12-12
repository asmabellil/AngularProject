import { TestBed } from '@angular/core/testing';

import { ServiceAnimalService } from './service-animal.service';

describe('ServiceAnimalService', () => {
  let service: ServiceAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
