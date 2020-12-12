import { TestBed } from '@angular/core/testing';

import { ServiceContactService } from './service-contact.service';

describe('ServiceContactService', () => {
  let service: ServiceContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
