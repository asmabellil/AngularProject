import { TestBed } from '@angular/core/testing';

import { ServiceUtilisateurService } from './service-utilisateur.service';

describe('ServiceUtilisateurService', () => {
  let service: ServiceUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
